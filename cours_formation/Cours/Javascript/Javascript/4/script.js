//?Exo sur le changement du titre
// let toggle = true

// title.addEventListener('click', ()=>{
//     if(toggle){
//         title.innerText = 'COUCOU LES LOULOUS';
//         toggle = false;
//     } else {
//         title.innerText = 'DOM MACHIN TRUC';
//         toggle = true;
//     }    
// });

// suite exo
// let title = document.querySelector('h1');
// let linkOne = document.querySelector('a');
// let linkTwo = document.getElementsByTagName('a')[1];
// let linkTree = document.getElementsByTagName('a')[2];

//*Exo sur les liens => ajoute une class au titre

// linkOne.addEventListener('click', ()=>{
//     title.classList.add('laClasse');
// });


// linkTwo.addEventListener('click',()=>{
//     title.classList.remove('laClasse');
// });

// linkTree.addEventListener('click', ()=>{
//     title.classList.toggle('laClasse');
// });

// document.addEventListener("click", (unEvent)=>{
//     console.log(unEvent);
//     console.log(unEvent.clientX, unEvent.clientY);
//     let img = document.createElement('img');
//     img.src = 'https://picsum.photos/200';
//     img.style.position ='absolute';
//     img.style.top = unEvent.clientY + 'px';
//     img.style.left = unEvent.clientX + "px";
//     document.body.append(img);
// });

//! Exo sur le formulaire => modifie les couleurs quand focus et blur

// let elementText = document.querySelectorAll('input');
// elementText[0].addEventListener('focus',()=>{
//     elementText[0].style.backgroundColor = 'lightblue';
//     elementText[0].style.color = 'white';
// });

// elementText[0].addEventListener('blur', ()=>{
//     elementText[0].style.backgroundColor = 'white';
//     elementText[0].style.color = 'black'
// });


//todo Exo pour voir l'ordre d'affichage des images dans la page

// let lesImages = document.querySelectorAll('img');
// let tabImg = Array.from(lesImages);
// let map = tabImg.map((uneImage,index)=>{
//     uneImage.addEventListener('load',()=>{
//         console.log(`Image numéro ${index} vient de finir de charger.`);
//     })
// });

//? Exercice : réagir à mouseleave
// let title = document.querySelector('h3');
// document.addEventListener('mouseleave',()=>{
//     title.style.display = 'block';
// })
// document.addEventListener('mouseenter',()=>{
//     title.style.display = 'none';
// });

//* Exercice DOM event SCROLL
//*Réagir au scroll

// let bar = document.querySelector('.bar');
// document.addEventListener('scroll',(unEvent)=>{
//     console.log(unEvent);
//     //Le scrollMax = hauteur de la page - hauteur d'affichage
//     let scrollMax = document.body.scrollHeight - innerHeight;
//     // On fait un pourcentage du scroll de l'utilisateur
//     let onEstOu = (scrollY*100)/scrollMax;
//     //Enfin on assigne ce pourcentage de scroll
//     //à la width(%) du style de la variable bar
//     bar.style.width = `${onEstOu}%`;
//     console.log(`
//         Hauteur de page : ${document.body.scrollHeight}
//         Hauteur affichage : ${innerHeight}
//         Scroll Position : ${screenY}
//         Pourcentage de scroll : ${onEstOu}%`);    
// });


// document.addEventListener('keydown', function(event) {
//     console.log(event);
// });

// const inputTesting = document.querySelector('input');
// console.log(inputTesting);

// inputTesting.value = 'MOMO'

//todo Exercice sur l'écoute du clavier
// const zoneTexte = document.querySelector('textarea');
// const laDivMagique = document.querySelector('.formRender');

// zoneTexte.addEventListener('keyup',()=>{
//     laDivMagique.innerText = zoneTexte.value;
// });


//! Twitter
// const zoneTexte = document.querySelector('textarea');
// const leBouton = document.querySelector('.button');

// zoneTexte.addEventListener('keyup',()=>{
//     if(zoneTexte.textLength >= 5){
//         leBouton.disabled = true;
//     } else{
//         leBouton.disabled = false;
//     }
// });

//! Version de jérôme : 

// //? ↓ Stocke la classe Submit qui est le bouton dans une variable
// const button = document.querySelector(".submit");

// //? Ecoute l'événement de pression du clavier dans la zone Area Text grâce à une variable pour récupérer les valeurs.
// //? ↓
// monTxt.addEventListener("keyup", () => {

//     //? ↓ Prend la taille du texte de mon textarea grâce à une variable
//     if (monTxt.textLength >= 5) {

//         //? Désactive le bouton grace à une variable et un paramètre signaler avec un "." ↓
//         button.disabled = true;
//     } else {

//         //? La même chose mais le repasse dans la valeur de base (donc réactive le bouton) ↓
//         button.disabled = false;
//     }
// });


