/*let tab = [1, 2, 3, 4, 5];

for (let i=0;i<t.length;i++){
    let rand = Math.floor(Math.random()*(i+1));
    let temporaire = t[i];
    t[i] = t[rand];
    t[rand] = temporaire;
}

for (let i = 0; i < tab.length; i++) {
    let rand = Math.floor(Math.random() *(i+1));
    let temporaire = tab[i];
    tab[i] = tab[rand];
    tab[rand] = temporaire;
  }
  
  console.log(tab);
   
//console.log(t);

*/


/*
Le jeu des allumettes

Il y a un certain nombre d'allumettes sur la table.
Chacun son tour, les joueurs vont retirer 1, 2 ou 3 allumettes.
Celui qui ne peut plus jouer (parce qu'il n'y a plus d'allumette) a perdu.
*/

// 1) Comment représenter (très simplement !) le nombre d'allumettes restantes ? Quel outil utiliser ?

// 2) Initialiser le jeu, en partant de 20 allumettes.

let nbrAllumettes = 20;

// 3) Faire une fonction (je ne précise pas les entrées/sorties, à vous de voir) qui dessine le jeu dans la console (simplement).
// Par exemple, en appelant la fonction au départ, ça écrira :
// ||||||||||||||||||||


function dessin(n){
    let a = "";
    for(let i=0;i<n;i++){
        a += "|"
    }
    console.log(a);    
}

dessin(nbrAllumettes);

while(nbrAllumettes > 0){
    let choice = parseInt(prompt("Saisissez un chiffre : "));
    nbrAllumettes -= choice;
    dessin(nbrAllumettes);
    if(nbrAllumettes <= 0){
        nbrAllumettes = 0;
        let restart = prompt("Recommencer ? Y/n");
        if(restart == "Y" || restart == "" || restart == "y"){
            nbrAllumettes = 20;
            console.log("Nouvelle partie : ");
            dessin(nbrAllumettes);
        }
    }
}



// 4) Écrire une fonction qui fait jouer un joueur.
// Pour ça, on peut utiliser : `parseInt(prompt("Message"))` demande une valeur à l'utilisateur et qui retourne le nombre donné.

//let choix = parseInt(prompt("Nombre ?"));

//nbrAllumettes = nbrAllumettes - choix;
//dessin(nbrAllumettes);


// 5) Appeler en boucle cette fonction, jusqu'à la fin de partie.



// while (nbrAllumettes > 0){
//     let choix = parseInt(prompt("Nombre ?"));

//     nbrAllumettes = nbrAllumettes - choix;
//     dessin(nbrAllumettes);
//     relance();
// }
// prompt("Partie terminée, on rejoue ?")

// function relance(){
//     nbrAllumettes = 20;
//     while (nbrAllumettes <= 0){
//         dessin(nbrAllumettes);
//     }
// }



// Bonus :
// - Fonction pour initialiser la partie (pour pouvoir recommencer une fois la partie finie)
// - Deuxième joueur automatique (l'ordinateur qui incarne le deuxième joueur)
//     - Joue au hasard
//     - Joue parfaitement (beaucoup plus technique !)
//     - Joue parfaitement avec quelques erreurs au début pour laisser une chance :)
// - Changer les règles (on peut retirer 1, 2 ou 4 allumettes ; changer la valeur initiale...)


