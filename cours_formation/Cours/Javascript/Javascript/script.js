//Chaine de caractère
let string = "je suis une chaîne de caractère";

//Nombre
let number = 30;

//Nombre à virgule
let numberVirgule = 25.36;

//tableau
let tab = [1, 2, 3, 5, 6];

//Object
let maVoiture = {
    marque: "Toyota",
    modele: "Yaris",
    annee: "2009",
};

//Bonus :
let maVariable = function(){
    console.log("Hello World");
}
maVariable();

//Les calculs :

console.log(1+1);
console.log(25-1);
console.log(2*3);
console.log(6/2);
console.log(9%3);
console.log(2,9+1,3);
console.log(2.9+1.3);
console.log(0,1+0,2);
console.log(0.1+0.2);
console.log(2**9);
console.log(5.215+2.365)
console.log(511654854*5485484554+6565844-878512/8745454)

//compteur : 

let compteur = 2;
compteur++;
console.log(compteur);
compteur = 2;
compteur--;
console.log(compteur);
compteur = 2;
console.log(compteur+=6);
compteur = 2;
console.log(compteur-=3);
compteur = 2;
console.log(compteur-=1);
compteur = 2;
console.log(compteur+=1);

//Exercice phrase

let nomPizza = `Vegetarienne`;
let nomUser = `Jérome`;
let date = `30/01/2024`;
let nbPizza = 1;
let pizzeria = `"La Pizzeria Raffinata"`;
let tempsLivraison = `25 minutes`;


let SumUpOrderPhrase = console.log(`Bonjour cher ${nomUser}, merci d'avoir passé commande chez ${pizzeria}, votre commande : ${nbPizza} ${nomPizza} arrivera dans ${tempsLivraison}



Qu'est ce qu'une pizza a dit à une autre pizza qui lui demandait
des conseils ? "Suis ta pâte et tout ira bien!"`);


//Exercice : Arrays
let nom = "Ben";
let age = 30;
let passion = ["lecture", "jeux vidéo"];
let tabUser = [nom, age, passion];
console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);

//Exercice array push
let leNom = "Rémy";
let lePrénom = "Ruffat";
let initiale = [leNom[0] + lePrénom[0]];

let laPhrase = [];
laPhrase.push(leNom,lePrénom,initiale);
console.log(laPhrase);


//Exercice fonction : 
function affichage(a){
    console.log("33 +",a);
}
affichage(5);

function addition(a,b){
    console.log(a+b);
}

addition(5,3);


//Exercice Quiz 1 

function buggyFunction(){
    let wtf = 9;
    console.log(wtf);
};
buggyFunction();

// Pour que la variable est une portée globale on la declare en dehors de la fonction 
// Au depart la variable wtf etait declarer dans la fonction elle n'avais donc comme scope que a fonction
//Il faut supprimer le console log qui ne sert a rien 

//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
//let something = 44; 
//function functionBugParent() {
    //let something = 9;
    //console.log(something);
    //console.log(lesNews);


    //function functionBugEnfant() {
        //let lesNews = `il est 99h67`;
    //}
//};
//functionBugParent();
//console.log(something);

//something est declarer 2 fois
//lesNews n'est pas declaré
//fonction BugEnfant n'est pas appeler


//Fonction moyenne : 
function moyenne(a=1,b=5){
    return (a+b)/2;
}
console.log(moyenne(11,15));
console.log(moyenne());

//Condition if/elese
function reservation(n=0){
    if(n>=30){
        return "Nous n'avons pas de places";
    }
    else if(n<10){
        return "Nous avons plein de places";
    }
    else{
        return "Il nous reste quelques places";
    }
}

console.log(reservation(15));
console.log(reservation(5));
console.log(reservation(25));
console.log(reservation());

//Les objects :
let user = {
    name: 'Soufi',
    firstname: 'Ben',
    age: 32,
    passions: {
        first: "l'argent",
        second: 'les poissons',
    }
}


console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['passions']);
console.log(user.passions.second);

user.name = 111;
user.age = "Soufi";
user.passions.second = 'Cinéma';

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['passions']);
console.log(user.passions.second);