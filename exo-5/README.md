# exo-5

Cet exercice consitu un nouveau projet dans un React mais toujours dans le même repo Git

## Votre mission

Pour cette mission finale, nous allons écrire plusieurs composants et les faire fonctionner les uns avec les autres.

Voici les composants que vous allez écrire :

- Un composant App qui reçoit un utilisateur et une date en tant que props
- Un composant User qui reçoit un utilisateur en tant que prop et renvoie un <h1> qui indique "Welcome back, USER"
- Un composant Today qui reçoit une date en tant que prop et renvoie <p> qui indique "Today is DATE"
- Votre App transmettra simplement les props aux bons composants, elle ne fera rien d’autre.

Voici la ligne pour render que vous trouverez dans le fichier index.js :

const element = <App user="Nom" date={Date()} />;
ReactDOM.render(element, document.getElementById('root'))
