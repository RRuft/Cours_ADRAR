const paragraphe = document.getElementsByTagName("p");
console.log(paragraphe);

const firstPara = document.getElementsByTagName("p")[0];
firstPara.innerText = `YOLO`;
console.log(firstPara);

const textTabs = Array.from(paragraphe);
console.log(textTabs);

const firstMap = textTabs.map((i) => {
    i.innerText = `JE SUIS HACKERMAN`;
    i.style.color = 'red';
});

//Le satagiaire :
//!Quizz : ca bug
// var voiture = "Renault";
// console.log(voiture);
// var voiture = "BMW";
// console.log(voiture);

//var n'est plus au goût du jour il faut le remplacer par let donc :
let voiture = "Renault";
console.log(voiture);
let voiture1 = "BMW";
console.log(voiture);


//v2
//!Quizz : ca bug (ouin ouin)
let bolide = 'Jaguar';
console.log(bolide);
//modifie ton var par un let et utilise ton console.log apres avoir déclarer ta variable bolide

//v3
//!Quizz ca bug
function choixVoiture(){
    let uneVoiture = "Harley Davidson"
    return uneVoiture;
}
console.log(choixVoiture());

//Il ne faut plus utiliser var maintenant !!
//la fonction ne retouner ou n'afficher rien 


//v4
//! Notion de scope avec un bloc IF 
let car = "Nissan";

if(car=="Nissan"){
    let vitesse = 800;
    console.log(vitesse);
}
