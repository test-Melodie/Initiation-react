# exo-3

Cet exercice consitu un nouveau projet dans un React mais toujours dans le même repo Git

## Votre mission

Jouons avec les... props ! Les props nous permettent de transmettre des données à nos composants. 

Ainsi, pour cette mission, vous allez écrire un composant fonctionnel qui affiche ses accessoires.

Écrivez le composant fonctionnel Shout (c’est une fonction, comme dans la mission précédente). 

Shout sera appelé avec un prop nommé "status" et renverra un <h1> contenant les mots "I am the STATUS of the World!"

Donc, ceci:

const element = <Shout status="King" />;
ReactDOM.render(element, document.getElementById('root'))

Créera le h1 : I am the King of the World!