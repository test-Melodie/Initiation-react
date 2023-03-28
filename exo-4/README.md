# exo-4

Cet exercice consitu un nouveau projet dans un React mais toujours dans le même repo Git

## Votre mission

Vous savez maintenant comment afficher un prop simple à l’intérieur de JSX. Pouvez-vous faire la même chose avec un prop contenant un array ? 😎

Pour cette mission, vous allez écrire le composant fonctionnel Clients.

Clients sera appelé avec un prop nommé "clients" qui contient un array, et il renverra une liste <ul> où chaque client a été inséré dans un <li>.

Donc, ceci :

const element = <Clients clients={["Batman", "Spiderman", "IronMan"]} />;
ReactDOM.render(element, document.getElementById('root'))

Crée les <ul> suivants :
- Batman
- Spiderman
- IronMan

Bien sûr, votre code ne peut pas supposer qu’il y aura toujours 3 éléments dans la liste. Il doit fonctionner avec des listes de 2, 4, 343...

Conseil : Vous pouvez utiliser la fonction map