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

// try{
//     prenom
//     alert('Bonjour');  
// }catch(err){
//     console.log(err);
//         alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//             -----------
//             Le Nom de l'erreur 
//             ${err.name}
//             -----------
//             Le Message de l'erreur  :
//             ${err.message}
//             ----------
//             L'emplacement de l'erreur:
//             ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);

// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)');
//     let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');
//     }else if(y == 0 || x == 0){
//         throw new Error('Division avec 0 impossible')
//     }else{
//         alert(x / y);
//     }
// }

// division();

//!Exercice API meteo latitude

// //? ↓ On declare la variable apiDiv et on lui assigne la div qui a la classe apiContact
// const apiDiv = document.querySelector('.apiContact');
// //? ↓ rend la fonction "async" pour permettre la réponse de l'API.
// const contactAPI = async ()=>{
//     //? ↓ le await permet de dire à notre variable d'attendre la réponse de l'API
//     const data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
//     console.log(data);
//     //? ↓ le .json permet de traduire les donnés en JS afin qu'elle soit compréhenssible par notre code
//     const dataTransformed = await data.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude; // ou dataTransformed['latitude']
// }
// contactAPI();


//* Exercice API Pokémon et magic
// const apiDiv = document.querySelector('.container-magic-card');
// const requestApi = ()=>{
//     fetch('https://api.magicthegathering.io/v1/cards')
//     .then(response => response.json())
//     .then((card) =>{
//         for(let i=0;i<20;i++){
//             apiDiv.innerText += card.cards[i].name + "\n";

//         }
//     })
// };
// requestApi();


// const listDiv = document.querySelector("#pokeListe");

// let pokeAPI = async () => {

//     let poke = await fetch("https://pokeapi.co/api/v2/pokemon");
//     console.log(poke);

//     let pokeTransformed = await poke.json();
//     console.log(pokeTransformed);
//     for  (let i = 0; i < 20; i++) {
//         //? ↓ crée un élément "p"
//         let newP = document.createElement("p");
//         //? ↓ cherche dans l'api la valeur de poke dans le result incrémenté à chaque fois par la boucle pour parcourir le tableau.
//         newP.innerText +=pokeTransformed.results[i]["name"];
//         //? ↓ Applique le paragraphe à chaque résultat.
//         listDiv.append(newP);
//     }
// };

// pokeAPI();


//! Exos avec SetTimeout

// //? ↓ On declare la variable titre et on lui assigne comme valeur le titre h1 present dans le html
// const title = document.querySelector('.mon-titre');
// //? ↓ On declare la variable body et on lui assigne comme valeur le body
// const body = document.querySelector('body');

// //? ↓ On appelle la fonction setTimout et on lui indique une fonction à executé ainsi que la durée avant l'exécution de cette dernière 
// setTimeout(()=>{
//     title.innerText = 'Je suis le titre';
//     body.style.backgroundColor = 'purple';
// },3000);
// //? ↑ le temps avant que la fonction ne s'execute est en ms


//todo Exo setInterval

// //? ↓ On déclare la variable myTitle, on lui assigne comme valeur la titre h3 du HTML
// const myTitle = document.querySelector('.mon-titre-h3');
// //? ↓ On déclare la variable timer, on lui assigne 3 comme valeur
// let timer = 3;
// //? ↓ On va écouter l'evenement click sur le h3 et déclancher une fonction quand cette evenement a lieu
// myTitle.addEventListener('click',()=>{
//     //? ↓ On déclare la variable countDown on lui assigne comme valeur la fonction setInterval qui contient une condition : SI la varibale timer est supérieur à 0 on réalise un certain code SINON on réalise l'autre option 
//     const countDown = setInterval(()=>{
//         if(timer>0){
//             myTitle.innerText = timer;
//             myTitle.style.color = 'purple';
//             myTitle.style.backgroundColor ='yellowgreen';
//         } else{
//             myTitle.innerText = "GO GO GO";
//             myTitle.style.color = 'red';
//             myTitle.style.backgroundColor ='black';
//             //? ↓ On clear le décompte de la varible timer qui se fait à cause de setInterval
//             clearInterval(countDown);
//         }
//         //? ↓ On décremente la valeur de timer 
//         timer--;
//     },1000);
//     //? ↑ On donne une valeur en ms qui relancera la fonction présente dans le addEventListener du myTitle
// });

//* LES CLASSES

// class UserProfile {
//     //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(nameUser, mailUser, phoneUser) {
//         // Attribut en IN MODE
//         this.nameUser = nameUser;
//         this.mailUser = mailUser;
//         this.phoneUser = phoneUser;
//         // Attribut en outMode
//         this.contact = phoneUser + mailUser;
//         this.resume = this.getProfileInfo();

//         // this._nom = nom;  
//     }
//     getProfileInfo() {
//         console.log('this ',this);
//         return `infos de l'utilisateur : 
//                 son nom : ${this.nameUser}
//                 son mail : ${this.mailUser}
//                 son Tél : ${this.phoneUser}`;
//     }
// }

// const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
// const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
// exampleUser2.getProfileInfo();


// //!Exo Class IMC
// class Imc{
//     constructor(nom,poids,taille){
//         this.nom = nom;
//         this.poids = poids;
//         this.taille = taille;
//         this.imc = (this.poids/(this.taille*this.taille)).toFixed(2);
//     }

//     display(){
//         console.log(`Nom : ${this.nom}, Poids : ${this.poids}, Taille : ${this.taille}, IMC : ${this.imc}`);
//     }
// }

// // //* progr principal -> on fait l'injection des données
// let list = [
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55),
// ];
//   //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
// list.forEach((uneCase) => uneCase.display());

// //todo Exo Class PME
// class Employee{
//     constructor(nom,prenom,age,salaire){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.salaire = salaire;
//         this.cout = this.calculCout();
//     }
//     calculCout(){
//         return this.salaire*12*(1+0.9);
//     }
//     getCout(){
//         return this.cout;
//     }
// }

// class Pme{
//     constructor(nom,equipe,ventes,coutfixes,achat){
//         this.nom = nom;
//         this.equipe = equipe;
//         this.ventes = ventes;
//         this.coutfixes = coutfixes;
//         this.achat = achat;
//         this.coutTotal = this.coutTotal();
//         this.coutInitial = achat + coutfixes;
//         this.bilan = this.bilan();
//     }
//     coutTotal(){
//         let coutEquipe = 0;
//         this.equipe.forEach((element) => {
//             coutEquipe += element.cout;
//         });
//         return coutEquipe;
//     }
//     bilan(){
//         let bilan = this.ventes - this.coutInitial - this.coutTotal;
//         return bilan;
//     }
//     bilanCalculed(){
//         console.log(`
//         ${this.nom} : Cout Initial : ${this.coutInitial} 
//         ${this.nom} : Cout total equipe : ${this.coutTotal}
//         ${this.nom} : Ventes : ${this.ventes}
//         ${this.nom} : Bilan : ${this.bilan}`);
//     }
// };

// const pme = new Pme (
//     //Le nom entreprise
//     "Ma Petite Entreprise - ", 
//       //L'equipe de salariés (un tableau)
//     [new Employee ("Duval", "Paul", 30, 2000),
//     new Employee ("Durand", "Alain", 40, 3000),
//     new Employee ("Dois", "Sylvia", 50, 4000),],
//        //le revenu , frais fixe, frais d'achat
//     300000,
//     20000,
//     50000);
// pme.bilanCalculed();