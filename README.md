# Guide Complet de Compilation et lancemement du Puissance 4 

## Prérequis
- Ordinateur Windows, Mac ou Linux
- Connexion internet pour le téléchargement

---

## ÉTAPE 1 : Installer Node.js

### Pour Windows :
1. Va sur [nodejs.org](https://nodejs.org)
2. Télécharge la version **LTS** (recommandée)
3. Double-clique sur le fichier .msi téléchargé
4. Suis les instructions d'installation (clique sur "Next" jusqu'à la fin)
5. Redémarre ton ordinateur

### Vérification de l'installation :
Ouvre ton terminal avec ctrl + j et tape :
```bash
node --version                    # Vérifier Node.js
npm install -g typescript         # Installer TypeScript
npm install readline-sync         # Installer les dépendances
tsc                               # Compiler

```


 Il faut ensuite verrifier que dans le .json il y ait bien ecrit 
 ```bash
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

Ensuite pour pouvoir lancer le jeux il faut inserer cette commande : 
 ```bash
node dist/index.js                # Lancer le jeu
```


