// let lastParagraphe = document.getElementsByTagName('p')[9];
// let titre = document.querySelector('h1');
// document.body.insertBefore(lastParagraphe, titre);

// let laDiv = document.querySelector('.vide');
// laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// // Append plutot pensé pour ajouter du contenu à la volé au format string
// // si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// // // Mais on a aussi la fonction appendChild;
// laDiv.appendChild(allParagraphes[0]);

//TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// const container = document.querySelector('.userProfile');
// container.style.background = 'linear-gradient(#e66465, #9198e5)';
// container.style.width = '20rem';
// container.style.height = '35rem';
// container.style.margin = 'auto';
// container.style.padding = '1.5rem';
// container.style.borderRadius = '0.5rem';

// const pP = document.createElement('img');
// pP.src = userData.img;
// pP.style.width = '20rem';
// container.append(pP);

// const userName = document.createElement('h1');
// userName.innerText = userData.name;
// container.append(userName);

// const userEmail = document.createElement('h3');
// userEmail.innerText = userData.email;
// container.append(userEmail);


// const userAge = document.createElement('h3');
// userAge.innerText = userData.age;
// container.append(userAge);


// const bornDay = document.createElement('h3');
// bornDay.innerText = userData.dob;
// container.append(bornDay);

// const inLife = document.createElement('h3');
// inLife.innerText = userData.active;
// container.append(inLife);

// V2

function createNewElement(pseudo,duTexte){
    const container = document.createElement('div');
    document.body.append(container);
    const elementOne = document.createElement('h4');
    elementOne.innerText = pseudo + " - ";
    container.append(elementOne)
    const para = document.createElement('p');
    para.innerText = duTexte;
    container.append(para);
    
    container.style.width = '6.5rem';
    container.style.display = 'flex';
    container.style.alignItems = "center";
    container.style.justifyContent = "space-around";   
}
createNewElement("Daniel","Gracia");

let firstLink = document.querySelector('a');
console.log(firstLink);
let allLinks = document.querySelectorAll('a');
console.log(allLinks);

let firstTitle = document.querySelector('h1');
console.log(firstTitle);

let firstImg = document.querySelector('img');
console.log(firstImg);

// firstTitle.style.backgroundColor = 'blue';
// firstTitle.style.color = 'beige';
// On accède directement aux porpiétés de l'objet qui correspondent aux attributs HTML
// firstTitle.className = 'laClasse';
// firstLink.href = 'https://www.google.com';
// firstImg.src = 'https://picsum.photos/200/300';

// On a une fonction native pour modifier n'importe quel attribut
firstTitle.setAttribute('class','laClasse');
firstTitle.setAttribute('bidule','toto');
firstLink.setAttribute('href','https://www.google.com');
firstImg.setAttribute('src','https://picsum.photos/200/300');
