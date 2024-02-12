// class CompteBancaire {
//     constructor(credit,retrait,etat,virement,nom){
//         this.credit = credit;
//         this.retrait = retrait;
//         this.etat = etat;
//         this.virement = virement;
//         this.nom = nom;
//     }
//     etat(){
//         console.log(`Visualisation de l'état du compte :${this.etat}€`);
//     }
//     exception(){
//         if(this.retrait>this.etat){
//             console.log(`retarait de : ${this.retrait} refusé avec un solde de : ${this.etat}`);
//         }else{
//             this.etat -= this.retrait;
//             console.log(this.etat);
//         }
//     }
//     virer(){
//         console.log(`Virement de : ${this.virement} de : ${this.nom} vers :`)
//     }
//     crediter(credit){
//         console.log(this.etat += credit);
//     }
// }



// Main, gère 3 comptes bancaires dans un tableau associatif
// const lesComptes = {
//     Alex: new CompteBancaire("Alex"),
//     Clovis: new CompteBancaire("Clovis"),
//     Marco: new CompteBancaire("Marco"),
// };

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
//for (let key in lesComptes) lesComptes[key].crediter(1000);

// un retrait de 100 par Alex
//???????????????;
// un petit virement: Marco Vire 300 à Clovis
//?????????????;
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
//?????;
// bilan : faire une description de tous les comptes en console (ou DOM ?)
//??????;


// //! Correction
// class CompteBancaire {
//     constructor(titulaire) {
//         this.titulaire = titulaire;
//         this.solde = 0;
//     }
//     // Ajoute un montant au solde
//     crediter(montant) {
//         this.solde += montant;
//         console.log("Ajout de: " + montant + " pour: " + this.titulaire);
//     }
//     // Retirer un montant au solde
//     retirer(montant) {
//         try {
//         if (this.solde < montant)
//             throw (
//             this.titulaire +
//             ", retrait de: " +
//             montant +
//             " refusé avec solde: " +
//             this.solde
//             );
//         this.solde -= montant;
//         console.log("Retrait de: " + montant + " pour: " + this.titulaire);
//         } catch (err) {
//         console.log("----->" + err);
//         }
//     }
//     virer(montant, membre) {
//         console.log(
//         "Virement de: " +
//             montant +
//             " de: " +
//             this.titulaire +
//             " vers: " +
//             membre.titulaire
//         );
//         membre.crediter(montant);
//         this.retirer(montant);
//     }

//     // Renvoie la description du compte
//     decrire() {
//         return "titulaire: " + this.titulaire + ", solde: " + this.solde;
//     }
// }


//* HERITAGE
// class UserProfile {
// //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(nameUser, mailUser, phoneUser) {
//         // Attribut en IN MODE
//         this.nameUser = nameUser;
//         this.mailUser = mailUser;
//         this.phoneUser = phoneUser;
//         // Attribut en outMode
//         this.contact = phoneUser + mailUser;
//         this.resume = this.getProfileInfo();

//           // this._nom = nom;  
//     }
//         getProfileInfo() {
//         console.log('this ',this);
//         return `infos de l'utilisateur : 
//                 son nom : ${this.nameUser}
//                 son mail : ${this.mailUser}
//                 son Tél : ${this.phoneUser}`;
//     }
// }

// class UserAdmin extends UserProfile {
//     constructor(unNom, unMail, unPhone, sector, personnalPhone) {
//         super(unNom, unMail, unPhone); //! Appel au constructor du parent
//         this.sector = sector;
//         this.personnalPhone = personnalPhone;
//     }
//     getAdminInfo() {
//         return `infos de l'utilisateur : 
//             son nom : ${this.nameUser}
//             son secteur d'intervention : ${this.sector}
//             son Tél Personnel : ${this.personnalPhone}`;
//     }
// }

// const exampleAdmin1 = new UserAdmin(
//     "Jacky",
//     "jack@gmail.com",
//     "012345678",
//     "administration",
//     "0987654323"
// );

// console.log(exampleAdmin1.getAdminInfo());


// //todo EXEMPLE Spread Operator 
// //! Exemple pour faire une copie 
// const tableauOriginal = [1, 2, 3];
// const copieTableau = [...tableauOriginal];

// console.log(tableauOriginal);
// console.log(copieTableau);

// //! Exemple pour faire une fusion 
// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5, 6];
// const tableauFusionne = [...tableau1, ...tableau2];
// console.log(tableauFusionne);

// //! Test avec des objets
// const objetSource = { a: 1, b: 2 };
// console.log(objetSource);
// const nouvelObjet = { ...objetSource };
// console.log(nouvelObjet);


// //? Exo Regex

// const login = document.querySelector('#email');
// const password = document.querySelector('#mdp');
// const containerError = document.querySelector('#error')

// login.addEventListener('keyup',()=>{
//     const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
//     if(!regex.test(login.value)){
//         login.style.backgroundColor = 'red';
//     } else{
//         login.style.backgroundColor = 'green';
//     }
// })

// password.addEventListener('blur',()=>{
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;    
//     if(!password.value.match(charDecimal)){
//         let paraTree = document.createElement('p');
//         paraTree.innerText = 'Veuillez mettre au minimum un chiffre';
//         containerError.appendChild(paraTree);
//     }
//     if(!password.value.match(charSpecial)){
//         let paraFour = document.createElement('p');
//         paraFour.innerText = 'Veuillez mettre au minimum un caratère spécial'
//         containerError.appendChild(paraFour);
//     }
//     if(password.value.length < 6){
//         const paraOne = document.createElement('p');
//         paraOne.innerText = 'trop court';
//         containerError.appendChild(paraOne);

//     } else if(password.value.length > 8){
//         const paraTwo = document.createElement('p');
//         paraTwo.innerText = 'trop long';
//         containerError.appendChild(paraTwo);
//     }
// })


//*CORRECTION : 
const loginInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const userMessage = document.querySelector('#userMessage');

loginInput.addEventListener('keyup',()=>{
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if(!regex.test(loginInput.value)){
        loginInput.style.backgroundColor = 'red';
    }
    else{
        loginInput.style.backgroundColor = 'green';
}
})

passwordInput.addEventListener('blur',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';

    if(passwordInput.value.length<6){
        errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(passwordInput.value.length>8){
        errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }

    if(!passwordInput.value.match(charDecimal)){
        errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
        errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
        userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
        userMessage.style.border ='5px solid red'
    }
    else{
    userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
    userMessage.style.border ='5px solid green'
    }
});

