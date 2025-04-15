#!/usr/bin/env node

import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Obtenir le chemin du répertoire actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

console.log('Exécution des migrations de base de données...');

// Vérifier si DATABASE_URL est défini
if (!process.env.DATABASE_URL) {
  console.error('La variable d\'environnement DATABASE_URL n\'est pas définie.');
  process.exit(1);
}

// Exécuter la commande de migration
exec('npx drizzle-kit push', { cwd: rootDir }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de l'exécution des migrations : ${error.message}`);
    process.exit(1);
  }
  
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  
  console.log(`Migrations terminées avec succès :`);
  console.log(stdout);
  
  // Créer un répertoire migrations s'il n'existe pas
  const migrationsDir = path.join(rootDir, 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
    console.log('Répertoire de migrations créé.');
  }
  
  console.log('Tout est prêt !');
});