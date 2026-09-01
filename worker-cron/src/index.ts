/**
 * Worker planifie : rafraichit la note Google affichee sur le site.
 *
 * Il ne fait qu'une chose, declencher un build Cloudflare Pages. C'est le
 * prebuild du site (scripts/fetch-google-rating.mjs) qui rappelle l'API Places
 * et regenere src/lib/google-rating.json. Aucun secret Google ici.
 *
 * Pourquoi un Worker plutot qu'un cron GitHub Actions : GitHub desactive les
 * workflows planifies sur un depot inactif 60 jours. Un Cron Trigger Cloudflare
 * ne s'endort jamais, et il est inclus dans le plan Workers Free.
 *
 * Volontairement separe du worker de contact : un rebuild declenche depuis un
 * worker nomme "contact" serait introuvable pour qui cherche l'origine d'un
 * deploiement inattendu.
 *
 * Deploiement :
 *   cd worker-cron
 *   wrangler secret put PAGES_DEPLOY_HOOK   // le nom en argument, l'URL au prompt
 *   wrangler deploy
 *
 * Test local : `wrangler dev` ne voit pas les secrets deployes. Il faut un
 * fichier worker-cron/.dev.vars (gitignore) contenant PAGES_DEPLOY_HOOK=...,
 * puis `wrangler dev --test-scheduled` et `curl localhost:8787/__scheduled`.
 * Attention, cela declenche un vrai deploiement de production.
 */

interface Env {
  /** URL du Deploy Hook du projet Cloudflare Pages. Secret. */
  PAGES_DEPLOY_HOOK: string;
}

export default {
  // `_event` est un ScheduledController, type non declare ici : comme
  // worker/src/index.ts, ce dossier n'embarque pas @cloudflare/workers-types et
  // s'appuie sur le tsconfig du site. On ne s'en sert pas.
  async scheduled(_event: unknown, env: Env): Promise<void> {
    if (!env.PAGES_DEPLOY_HOOK) {
      console.error('[cron] PAGES_DEPLOY_HOOK absent, aucun build declenche.');
      return;
    }

    // Une erreur ici n'a pas de consequence : le site continue d'afficher les
    // derniers chiffres connus, et le prochain passage retentera.
    try {
      const response = await fetch(env.PAGES_DEPLOY_HOOK, { method: 'POST' });
      if (!response.ok) {
        console.error(`[cron] Deploy Hook a repondu ${response.status} ${response.statusText}`);
        return;
      }
      console.log('[cron] Build Cloudflare Pages declenche.');
    } catch (error) {
      console.error(`[cron] Appel du Deploy Hook impossible : ${(error as Error).message}`);
    }
  },

  // Aucune surface HTTP : une URL publique capable de declencher un build
  // serait un moyen simple d'epuiser le quota de builds du projet.
  fetch(): Response {
    return new Response('Not found', { status: 404 });
  },
};
