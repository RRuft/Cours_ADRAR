//! PreventDefault exo

// let monForm = document.querySelector("#myForm");
// //? ↓ Ecoute le bouton (submit)
// monForm.addEventListener("submit", (event) => {
//   //? ↓ Annule l'événement par défaut du bouton (submit) (De base, il recharge la page)
//     event.preventDefault();
//     console.log(event);
//   //? ↓ Reset le formulaire (sans recharger la page)
// monForm.reset();
// });

//* Exercice localStorage

// //? ↓ On cible l'élément textarea du HTML et on le place dans la variable monTxt
// let monTxt = document.querySelector('#formMessage');
// //? ↓ On cible l'élément div grâce à sa classe ".ma-div", on la place dans la variable rendu
// let rendu = document.querySelector('.ma-div');
// //? ↓ On assigne le contenu de localStorage (la monSuperTexte) comme étant la valeur de monTxt
// monTxt.value = localStorage.getItem("monSuperTexte");
// //? ↓ Si la valeur de monTxt est definit alors on assigne au innerText (on affiche le contenu visuellement) la valeur contenu dans monSuperTexte grâce à la fonction getItem
// if(monTxt.value){
//     monTxt.innerText = localStorage.getItem('monSuperTexte');
// }
// //? ↓ On écoute l'évenement de "monté" de touche du clavier sur l'élement monTxt
// monTxt.addEventListener('keyup',()=>{
//     //? ↓ Sur localStorage grâce à la fonction setItem on definit la clée (monSuperTexte) ainsi que sa valeur (monTxt.value) qui est égal à la valeur contenu dans la zone de texte
//     localStorage.setItem('monSuperTexte',monTxt.value);
//     //? ↓ On assigne à la variable "rendu" grâce à innerTxt la valeur de monTxt 
//     rendu.innerText = monTxt.value;
// });

//todo Découverte TRY Catch

try{
    prenom
    alert('Bonjour');  
}catch(err){
    console.log(err);
        alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
            -----------
            Le Nom de l'erreur 
            ${err.name}
            -----------
            Le Message de l'erreur  :
            ${err.message}
            ----------
            L'emplacement de l'erreur:
            ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);