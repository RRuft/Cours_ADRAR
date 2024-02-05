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
// })


// linkTwo.addEventListener('click',()=>{
//     title.classList.remove('laClasse');
// })

// linkTree.addEventListener('click', ()=>{
//     title.classList.toggle('laClasse');
// })

// document.addEventListener("click", (unEvent)=>{
//     console.log(unEvent);
//     console.log(unEvent.clientX, unEvent.clientY);
//     let img = document.createElement('img');
//     img.src = 'https://picsum.photos/200';
//     img.style.position ='absolute';
//     img.style.top = unEvent.clientY + 'px';
//     img.style.left = unEvent.clientX + "px";
//     document.body.append(img);
// })

//! Exo sur le formulaire => modifie les couleurs quand focus et blur

// let elementText = document.querySelectorAll('input');
// elementText[0].addEventListener('focus',()=>{
//     elementText[0].style.backgroundColor = 'lightblue';
//     elementText[0].style.color = 'white';
// })

// elementText[0].addEventListener('blur', ()=>{
//     elementText[0].style.backgroundColor = 'white';
//     elementText[0].style.color = 'black'
// })


//todo Exo pour voir l'ordre d'affichage des images dans la page

// let lesImages = document.querySelectorAll('img');
// let tabImg = Array.from(lesImages);
// let map = tabImg.map((uneImage,index)=>{
//     uneImage.addEventListener('load',()=>{
//         console.log(`Image numéro ${index} vient de finir de charger.`);
//     })
// })

//? Exercice : réagir à mouseleave
// let title = document.querySelector('h3');
// document.addEventListener('mouseleave',()=>{
//     title.style.display = 'block';
// })
// document.addEventListener('mouseenter',()=>{
//     title.style.display = 'none';
// })

//* Exercice DOM event SCROLL
//*Réagir au scroll
document.addEventListener('scroll',(unEvent)=>{
    console.log(unEvent);
    let scrollMax = document.body.scrollHeight - innerHeight;
    console.log(scrollMax);
    let onEstOu = (scrollY/scrollMax)*100;
    console.log(onEstOu);
})

