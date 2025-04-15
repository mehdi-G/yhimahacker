# C.F.T.T - مركز لدعم الأسرة وتنميتها

Site web pour le Centre de soutien et de développement familial (C.F.T.T) offrant des informations sur les cours, ateliers et services de soutien familial en arabe.

## Fonctionnalités

- Présentation du centre et de ses services
- Informations sur les cours de compréhension du divorce
- Détails sur les ateliers de libération émotionnelle
- Formulaire de contact avec stockage en base de données
- Inscription à la newsletter
- Design responsive avec animations fluides
- Interface entièrement en arabe avec support RTL

## Technologies utilisées

- Frontend: React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Express.js, Node.js
- Base de données: PostgreSQL avec Drizzle ORM
- Déploiement: Render.com

## Déploiement sur Render.com

### Prérequis

- Un compte [Render.com](https://render.com/)
- Un dépôt GitHub contenant ce projet

### Étapes de déploiement

1. **Connectez-vous à votre compte Render.com**

2. **Créez un nouveau service Web**
   - Cliquez sur "New" puis "Blueprint"
   - Sélectionnez votre dépôt GitHub
   - Render détectera automatiquement le fichier `render.yaml` et configurera les services

3. **Configurez les variables d'environnement**
   - Render créera automatiquement une base de données PostgreSQL et configurera `DATABASE_URL`
   - Ajoutez manuellement `SENDGRID_API_KEY` si vous souhaitez utiliser la fonctionnalité d'envoi d'e-mails

4. **Lancez le déploiement**
   - Cliquez sur "Create Blueprint"
   - Render.com va déployer votre application et votre base de données

5. **Accédez à votre application**
   - Une fois le déploiement terminé, vous pouvez accéder à votre application via l'URL fournie par Render

### Déploiement manuel (alternative)

Si vous préférez ne pas utiliser le Blueprint, vous pouvez également déployer manuellement :

1. Créez une base de données PostgreSQL sur Render
2. Créez un service Web en pointant vers votre dépôt GitHub
3. Configurez les variables d'environnement requises (voir `.env.example`)
4. Définissez la commande de build : `npm install && npm run build`
5. Définissez la commande de démarrage : `npm start`

## Variables d'environnement

Référez-vous au fichier `.env.example` pour les variables d'environnement nécessaires.

## Développement local

```bash
# Installer les dépendances
npm install

# Créer la base de données
npm run db:push

# Démarrer le serveur de développement
npm run dev
```

L'application sera disponible sur http://localhost:5000