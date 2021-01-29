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
