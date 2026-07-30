/**
 * Worker de reception du formulaire de contact.
 *
 * Le contrat n'est PAS libre : il est impose par le chemin primaire de
 * src/components/ContactForm.tsx, qu'on ne modifie pas.
 *
 *   POST /api/v1/contact  (multipart/form-data)
 *   champs : name, email, phone, city, service, message, honeypot, photos[]
 *
 *   200 -> envoi confirme
 *   400 -> validation (le navigateur affiche l'erreur, PAS de fallback)
 *   429 -> non emis actuellement, mais reserve : ContactForm le traite deja
 *          comme une erreur finale sans fallback
 *   tout le reste (404, 5xx, timeout, reseau) -> le navigateur retombe sur Web3Forms
 *
 * REGLE ABSOLUE : ne jamais repondre 200 sans confirmation d'envoi par Resend.
 * Un 200 menteur empeche le fallback de se declencher : le lead est perdu
 * sans aucun signal, ni pour le visiteur ni pour l'exploitant.
 */

interface Env {
  RESEND_API_KEY: string;
  /** Destinataire final. Tant que le domaine n'est pas verifie, Resend n'accepte
   *  que l'adresse du compte ou les adresses de test @resend.dev. */
  CONTACT_TO: string;
  /** Expediteur. Sans domaine verifie : onboarding@resend.dev. */
  CONTACT_FROM: string;
  /** Origines autorisees, separees par des virgules. */
  ALLOWED_ORIGINS: string;
}

const MAX_PHOTOS = 3;
/** Garde-fou avant tout traitement : au-dela, on refuse sans bruler de CPU. */
const MAX_TOTAL_BYTES = 20 * 1024 * 1024;

/**
 * Libelles lisibles des services.
 *
 * Duplique volontairement la liste de src/components/ContactForm.tsx : le
 * formulaire envoie le slug (bon choix pour une API), et c'est ici qu'on le
 * traduit pour un humain. A tenir a jour si un service est ajoute au site.
 */
const SERVICE_LABELS: Record<string, string> = {
  paysagisme: 'Aménagement paysager / Création de jardin',
  entretien: 'Entretien de jardin',
  elagage: "Élagage / Taille d'arbres",
  abattage: 'Abattage / Dessouchage',
  terrasse: 'Terrasse / Aménagement extérieur',
  cloture: 'Clôture / Portail',
  'taille-haies': 'Taille de haies',
  debroussaillage: 'Débroussaillage / Nettoyage terrain',
  arrosage: 'Arrosage automatique',
  autre: 'Autre demande',
};

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim());
  // On ne renvoie l'en-tete que si l'origine est connue : un '*' permissif
  // laisserait n'importe quel site poster dans la boite du client.
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (origin && allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function json(body: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

/** Echappe le HTML : le message vient d'un formulaire public. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  // btoa n'accepte pas un tres grand nombre d'arguments d'un coup.
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

interface Lead {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

function buildSubject(lead: Lead): string {
  const parts = [SERVICE_LABELS[lead.service] || 'Demande générale'];
  if (lead.city) parts.push(lead.city);
  return `Nouvelle demande - ${parts.join(' - ')}`;
}

function buildText(lead: Lead, photoCount: number): string {
  const lines = [
    `Nom       : ${lead.name}`,
    `Email     : ${lead.email}`,
    `Téléphone : ${lead.phone || 'non renseigné'}`,
    `Ville     : ${lead.city || 'non renseignée'}`,
    `Service   : ${SERVICE_LABELS[lead.service] || 'non précisé'}`,
    '',
    'Message :',
    lead.message,
  ];
  if (photoCount > 0) {
    lines.push('', `${photoCount} photo(s) en pièce(s) jointe(s).`);
  }
  return lines.join('\n');
}

function buildHtml(lead: Lead, photoCount: number): string {
  const rows: Array<[string, string]> = [
    ['Email', `<a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>`],
  ];
  if (lead.phone) {
    // Lien tel: cliquable : le mail est lu sur un telephone, c'est l'action n1.
    rows.push(['Téléphone', `<a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a>`]);
  }
  if (lead.city) rows.push(['Ville', escapeHtml(lead.city)]);
  rows.push(['Service', escapeHtml(SERVICE_LABELS[lead.service] || 'non précisé')]);

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;white-space:nowrap">${label}</td>` +
        `<td style="padding:6px 0;color:#111827">${value}</td></tr>`
    )
    .join('');

  const photosHtml =
    photoCount > 0
      ? `<p style="margin:20px 0 0;color:#6b7280;font-size:14px">${photoCount} photo(s) en pièce(s) jointe(s).</p>`
      : '';

  return `<!DOCTYPE html>
<html lang="fr"><body style="margin:0;padding:24px;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:24px">
    <p style="margin:0 0 4px;color:#6b7280;font-size:13px">Nouvelle demande via le site</p>
    <h1 style="margin:0 0 20px;font-size:22px;color:#111827">${escapeHtml(lead.name)}</h1>
    <table style="border-collapse:collapse;font-size:15px">${rowsHtml}</table>
    <div style="margin-top:20px;padding-top:20px;border-top:1px solid #e5e7eb">
      <p style="margin:0 0 6px;color:#6b7280;font-size:13px">Message</p>
      <p style="margin:0;color:#111827;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
    </div>
    ${photosHtml}
  </div>
</body></html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const cors = corsHeaders(origin, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/api/v1/contact') {
      return json({ message: 'Not found' }, 404, cors);
    }
    if (request.method !== 'POST') {
      return json({ message: 'Method not allowed' }, 405, cors);
    }

    // Refus precoce : evite de bruler du CPU sur un corps enorme.
    const declaredSize = Number(request.headers.get('Content-Length') || '0');
    if (declaredSize > MAX_TOTAL_BYTES) {
      return json({ message: 'Les fichiers envoyés sont trop volumineux.' }, 400, cors);
    }

    // Pas de rate limiting ici : le binding Cloudflare est un no-op sur le plan
    // Free (verifie — 12 requetes en 2s passent contre une limite de 5/60s), et
    // du code qui simule une protection est pire que pas de protection.
    // La protection anti-abus repose sur Turnstile, cote formulaire.

    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return json({ message: 'Requête invalide.' }, 400, cors);
    }

    const readField = (key: string): string => {
      const value = form.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };

    // Honeypot : on simule le succes pour ne pas renseigner le bot.
    if (readField('honeypot')) {
      return json({ ok: true }, 200, cors);
    }

    const lead: Lead = {
      name: readField('name'),
      email: readField('email'),
      phone: readField('phone'),
      city: readField('city'),
      service: readField('service'),
      message: readField('message'),
    };

    const errors: string[] = [];
    if (!lead.name) errors.push('Le nom est obligatoire.');
    if (!lead.email) {
      errors.push("L'email est obligatoire.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      errors.push("L'adresse email est invalide.");
    }
    if (!lead.message) errors.push('Le message est obligatoire.');
    if (errors.length > 0) {
      return json({ message: errors.join(' ') }, 400, cors);
    }

    const files = form
      .getAll('photos')
      .filter((entry): entry is File => entry instanceof File && entry.size > 0)
      .slice(0, MAX_PHOTOS);

    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      return json({ message: 'Les photos envoyées sont trop volumineuses.' }, 400, cors);
    }

    const attachments = await Promise.all(
      files.map(async (file, index) => ({
        filename: file.name || `photo-${index + 1}.jpg`,
        content: toBase64(await file.arrayBuffer()),
      }))
    );

    let resendResponse: Response;
    try {
      resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: env.CONTACT_FROM,
          to: [env.CONTACT_TO],
          reply_to: lead.email,
          subject: buildSubject(lead),
          text: buildText(lead, attachments.length),
          html: buildHtml(lead, attachments.length),
          ...(attachments.length > 0 && { attachments }),
        }),
      });
    } catch (error) {
      // Resend injoignable : on renvoie 5xx pour que le navigateur bascule sur Web3Forms.
      console.error('resend_unreachable', String(error));
      return json({ message: "Service d'envoi indisponible." }, 502, cors);
    }

    if (!resendResponse.ok) {
      const detail = await resendResponse.text().catch(() => '');
      console.error('resend_error', resendResponse.status, detail);
      // Volontairement 502 et non 400 : l'echec vient de nous, pas du visiteur,
      // donc le fallback Web3Forms doit prendre le relais.
      return json({ message: "Service d'envoi indisponible." }, 502, cors);
    }

    const sent = (await resendResponse.json().catch(() => null)) as { id?: string } | null;
    if (!sent?.id) {
      console.error('resend_no_id');
      return json({ message: "Service d'envoi indisponible." }, 502, cors);
    }

    console.log('lead_sent', sent.id, `photos=${attachments.length}`, `bytes=${totalBytes}`);
    return json({ ok: true, id: sent.id }, 200, cors);
  },
};
