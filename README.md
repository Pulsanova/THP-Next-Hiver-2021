# THP Next hiver 2021 : sandbox

Quelques corrigés et exemples de code pour la session "Next" de The Hacking Project qui a débuté le 04/01/2021.

N'hésitez pas à contacter votre mentor technique Polo pour toute question sur le
code présent dans ce repo. Aussi, si vous voulez soumettre une pull-request parce que
vous avez trouvé un bug, ne vous gênez surtout pas, ça sera apprécié&nbsp;! 👍

## Le mini RPG

Dans le dossier [/POO-Mini-RPG](/POO-Mini-RPG) vous trouverez un "corrigé" du mini jeu RPG,
exercice validant de la 1ère semaine du cursus. Il n'est pas terminé, afin de vous permettre
d'aller plus loin si vous le souhaitez&nbsp;! N'hésitez pas à envoyer des pull-requests pour
qu'on jette un œil à votre code dès qu'on trouve le temps 🙂.

## L'algorithmie

Dans le dossier [/algorithmie](/algorithmie) se trouve une version possible des scripts d'algo
à faire pour le projet validant de la semaine 02. Deux dossiers, plusieurs possibilités&nbsp;:
- /sorting → lancez la commande `node sorting/run.js data.txt` (ou bien `data2.txt`)
- /project → une commande par exercice (documentée dans le fichier JS). Exemple&nbsp;: `node project/exo1.js subject1.txt 17`

## La recherche de films

Dans le dossier [/Movie-Search](/Movie-Search), on trouvera un "corrigé" du projet de page de
recherche de films via l'[API de OMDb](http://www.omdbapi.com/). Pour que cela fonctionne,
il faut ajouter un fichier `api-key.js` (qui est gitignoré) dans ce dossier, contenant la
ligne suivante&nbsp;:

```js
const API_KEY = 'le-token-fourni-par-OMDb';
```

## La SPA de « The Hyper Progame »

Le dossier [/ProGames](/ProGames) contient une version de la SPA "The Hyper Progame", projet
validant de la semaine 04. Cette version utilise le bundler Parcel. Pour lancer le projet en mode
développement, il suffit de lancer la commande `npm start`, puis de se rendre à l'adresse :
[http://localhost:1234](http://localhost:1234).


## L'appli React du « bloc-notes »

Dans le dossier [/Bloc-notes](/Bloc-notes), vous trouverez une version du bloc-notes React, projet
validant de la semaine 05. Dans ce projet, les [règles ESLint de Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
ont été mises en place, avec quand même quelques exceptions (voir les `rules` dans le
fichier `.eslintrc.json`).

## Exemples de "custom hooks"

Dans le dossier [/React-hooks](/React-hooks), on trouvera des exemples d'utilisation des hooks les
plus couramment utilisés dans une appli React, à savoir : `useRef()`, `useMemo()`, `useCallback()`,
et `useReducer()`, mais aussi un exemple d'utilisation de "custom hooks" afin de centraliser le code
de components React.

## Mini réseau social

Dans le dossier [/Mini-Social-Network](/Mini-Social-Network), vous trouverez une version de départ
du projet de la semaine 07 (Redux). Il n'y a que le système de login et la récupération des posts,
mais ça peut servir de bonne base pour la suite ! Pour les curieux qui veulent plutôt utiliser Mobx,
vous trouverez le même projet, mais en version Mobx dans le dossier
[/Mini-Social-Network-Mobx](/Mini-Social-Network-Mobx) !

## Introduction à TypeScript et aux tests avec Jest

Dans le dossier [/typescript](/typescript) se trouve une mini application initialisée avec
`create-react-app` et son template `typescript`, permettant d'utiliser TS pour écrire le code de
l'application. Aussi, on y trouvera quelques tests unitaires, utilisant Jest et "React Testing
Library" pour les composants : lancer la commande `npm run test`, puis appuyer sur la touche "a"
pour tous les exécuter.

## Application React en SSR / SSG avec Next.js*

Dans le dossier [/next-js-app](/next-js-app), on trouvera une application créée avec `create-next-app`,
comme exemple d'utilisation du framework [Next.js](https://nextjs.org/) permettant de faire du "Server
Side Rendering" (SSR) et de la "Static Site Generation" (SSG). Lancer la commande `npm dev` pour essayer !
