/**
 * Chien de garde du rafraichissement de la note Google.
 *
 * La chaine a quatre maillons : cron de worker-cron -> Deploy Hook Pages ->
 * build -> API Places. Chacun peut tomber en silence, et le site continue
 * d'afficher une note perimee sans que personne ne le voie (vecu du 01/09 au
 * 19/10/2026). Plutot que d'instrumenter chaque maillon, on verifie le
 * resultat : le fichier /google-rating.json publie par le prebuild.
 *
 *   checkedAt  date du dernier build    -> perime = cron, hook ou build en panne
 *   fetchedAt  dernier appel Google OK  -> perime = API Places en panne
 *   error      raison du dernier echec Google, telle que le build l'a vue
 *
 * Il vit ici, et non dans worker-cron, parce qu'un chien de garde ne doit pas
 * dependre de ce qu'il surveille : si worker-cron n'est plus deploye, c'est ce
 * worker-ci, en service pour le formulaire, qui le signale. Il reutilise aussi
 * son envoi Resend deja eprouve, sans nouveau secret.
 */

export interface WatchdogEnv {
  RESEND_API_KEY: string;
  CONTACT_FROM: string;
  /** Destinataire des alertes : le developpeur, pas le paysagiste. */
  ALERT_TO: string;
}

const RATING_URL = 'https://artdesjardins-paysagiste.fr/google-rating.json';

/**
 * Le rebuild a lieu le lundi a 6 h UTC. Huit jours laissent passer un lundi
 * normal et alertent des le lendemain d'un lundi manque.
 */
export const DELAI_MAX_MS = 8 * 24 * 60 * 60 * 1000;

export interface EtatNote {
  fetchedAt?: unknown;
  checkedAt?: unknown;
  error?: unknown;
}

function jours(ms: number): number {
  return Math.floor(ms / (24 * 60 * 60 * 1000));
}

/** Probleme a signaler, ou null si la note est fraiche. Fonction pure. */
export function diagnostic(etat: EtatNote, maintenant: Date): string | null {
  const checkedAt = typeof etat.checkedAt === 'string' ? Date.parse(etat.checkedAt) : NaN;
  const fetchedAt = typeof etat.fetchedAt === 'string' ? Date.parse(etat.fetchedAt) : NaN;

  if (Number.isNaN(checkedAt) || Number.isNaN(fetchedAt)) {
    return `google-rating.json illisible : ${JSON.stringify(etat).slice(0, 300)}`;
  }

  const ageBuild = maintenant.getTime() - checkedAt;
  if (ageBuild > DELAI_MAX_MS) {
    return (
      `Aucun build du site depuis ${jours(ageBuild)} jours (dernier : ${etat.checkedAt}). ` +
      'Maillon a verifier : cron de worker-cron (wrangler deployments list, tail), ' +
      'secret PAGES_DEPLOY_HOOK, ou builds en echec dans Cloudflare Pages.'
    );
  }

  const ageNote = maintenant.getTime() - fetchedAt;
  if (ageNote > DELAI_MAX_MS) {
    return (
      `Les builds tournent mais l'API Places echoue depuis ${jours(ageNote)} jours ` +
      `(derniere note valide : ${etat.fetchedAt}). Derniere erreur : ${String(etat.error ?? 'inconnue')}. ` +
      'Le site affiche la derniere note valide. Verifier GOOGLE_MAPS_API_KEY / GOOGLE_PLACE_ID ' +
      'dans Pages et la facturation Google Cloud.'
    );
  }

  return null;
}

async function alerte(env: WatchdogEnv, probleme: string): Promise<void> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.ALERT_TO],
      subject: '[artdesjardins-paysagiste.fr] Note Google non rafraichie',
      text: `${probleme}\n\nEtat publie : ${RATING_URL}\nCe message est renvoye chaque jour tant que le probleme persiste.`,
    }),
  });
  if (!response.ok) {
    // Dernier recours : l'erreur reste visible dans l'onglet Observability.
    throw new Error(`alerte non envoyee, Resend ${response.status} ${await response.text().catch(() => '')}`);
  }
}

export async function verifieRafraichissement(env: WatchdogEnv, maintenant = new Date()): Promise<void> {
  let probleme: string | null;
  try {
    // Contourne le cache : c'est l'etat reel de la production qu'on veut.
    const response = await fetch(RATING_URL, { cache: 'no-store' });
    probleme = response.ok
      ? diagnostic((await response.json()) as EtatNote, maintenant)
      : `${RATING_URL} repond ${response.status} : le site n'a pas ete rebati depuis l'ajout du chien de garde, ou le prebuild ne publie plus son etat.`;
  } catch (error) {
    probleme = `${RATING_URL} injoignable : ${(error as Error).message}`;
  }

  if (!probleme) {
    console.log('watchdog_ok');
    return;
  }
  console.error('watchdog_alerte', probleme);
  await alerte(env, probleme);
}
