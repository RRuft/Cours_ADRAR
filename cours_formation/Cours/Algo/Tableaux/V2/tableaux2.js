// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function lastElement(t){
    console.log(t[t.length-1]);
}
let tab = [6,2,3,2,5,5864,625];
lastElement(tab);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function lastElement2(t){
    return(t[t.length-1]);
}

console.log(lastElement2(tab));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minElement(t){
    let save = t[0];
    for(let i=0;i<t.length;i++){
        if(t[i]< save){
            save = t[i];
        }
    }
    return save;
}
console.log(minElement(tab));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxElement(t){
    let save = t[0];
    for(let i=0;i<t.length;i++){
        if(t[i]> save){
            save = t[i];
        }
    }
    return save;
}
console.log(maxElement(tab));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function repeatNumber(t,n){
    let repeat = 0;
    for(let i=0;i<t.length;i++){
        if(t[i]==n){
            repeat == repeat++;
        } 
    }
    return repeat;
}
console.log(repeatNumber(tab,2));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
// Note : il y a une variante plus compliquée de cet exo, tout en bas de la feuille !
function loopNumber(t,n){
    let save = false;
    for(let i=0;i<t.length;i++){
        if(t[i]===n){
            save = true;
        }
    }
    return save;
}
console.log(loopNumber(tab,6));
// Créer un tableau qui contient [1,2,3,...,7777].
let array = [];
for(let i=0;i<7778;i++){
    array.push(i);
}
console.log(array)

// Créer un tableau qui contient [10,20,30,...,77770].
let array1 = [];
for(let i=10;i<77771;i=i+10){
    array1.push(i);
}
console.log(array1);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let array2 = [];
for(let i=0;i<array1.length;i++){
    array2.push(array1[i]/2); 
}
console.log(array2);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
function newTableau(t){
    while(t[t.length-1] < 50){
        t.pop();
    }
}
let arraytest = [84,546,215,69,10,23];
newTableau(arraytest);
console.log(arraytest)
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// [Bonus] Suite de l'exo de recherche de valeur : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
