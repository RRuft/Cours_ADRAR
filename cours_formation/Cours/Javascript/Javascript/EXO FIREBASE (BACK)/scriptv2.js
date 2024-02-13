

//!------------------------------------------------------
//La variable de config pour firebase
const firebaseConfig = {
  apiKey: "AIzaSyB3iG7RiLcMCWZU9JOQ7X8x4RD8ymbgtRk",
  authDomain: "projet-test-remy-a6445.firebaseapp.com",
  databaseURL: "https://projet-test-remy-a6445-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projet-test-remy-a6445",
  storageBucket: "projet-test-remy-a6445.appspot.com",
  messagingSenderId: "738210181645",
  appId: "1:738210181645:web:49999d1e2415b2af9cdb44"
};

firebase.initializeApp(firebaseConfig);
  //On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
  // On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());

const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());

const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");

readUserData();


/* //!exo firebase
function addUserBtnClicked() {
  const addUserInputsUI = document.getElementsByClassName('user-input');
  const newUser = {
  }
  for(let i = 0; i < addUserInputsUI.length; i++){
    let key = addUserInputsUI[i].getAttribute('data-key')
    let value = addUserInputsUI[i].value;
    newUser[key] = value;
  };
  usersRef.push(newUser);
  console.log("Nouvel utilisateur enregistré !");
  console.log(` nom : ${newUser.name} et age : ${newUser.age} `);
  document.getElementById("add-user-form").reset()
  
};
*/ 
//!correction exo firebase
function addUserBtnClicked() {
  //* on fait une reférence à notre noeud users
  // const usersRef = dbRef.child('users');
  //* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
  const addUserInputsUI = document.getElementsByClassName("user-input");
  console.log(addUserInputsUI);
  //* On crée un objet (vide pour le moment) va stocker les infos du nouvel utilisateur
  let newUser = {};
  //* On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
  for (let i = 0; i < addUserInputsUI.length; i++) {
    //* Ci dessous on récupère les key et value (on a des attributs data-key déjà placé en html)
    let key = addUserInputsUI[i].getAttribute("data-key");
    //* Pour chaque input on récupère la value.
    let value = addUserInputsUI[i].value;
    //* Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
    newUser[key] = value;
  }
  //* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
  usersRef.push(newUser);
  console.log("New User SAVED");
  console.log(`${newUser.name} il a ${newUser.age} ans`);
  //* Pour + de confort on reset le formulaire une fois qu'on a ajouté un user
  formUserUI.reset();
};


function readUserData() {
  usersRef.on("value", (snap) => {
    userListUI.innerHTML = "";
    snap.forEach((childSnap) => {
      //* Key va stocker les ID
      let key = childSnap.key;
      let value = childSnap.val();
      let $li = document.createElement("li");
      //*Phase 4 on fait les icones pour UPDATE
      let editIconUI=document.createElement('button');
      editIconUI.innerText = 'Update'
      editIconUI.setAttribute('class','btn btn-outline-primary mx-3');
      //*Phase 5 on fait les icones pour UPDATE
      let deleteIconUI=document.createElement('button');
      deleteIconUI.innerText = 'Delete'
      deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
       //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
      //* on veut savoir qui on supprime au click
      deleteIconUI.setAttribute("userid", key);
      deleteIconUI.addEventListener("click", deleteButtonClicked);
      //* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
      editIconUI.setAttribute("userid", key);
      editIconUI.addEventListener("click", editButtonClicked);
      $li.innerText = value.name;
      $li.append(editIconUI);
      $li.append(deleteIconUI);
      $li.setAttribute("user-key", key);
      $li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
      //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
      $li.addEventListener("click", userClicked);
      userListUI.append($li);
    });
  });
}
//!SOLUCE readuserdata
/*
function readUserData() {
  usersRef.on("value", (snap) => {
    userListUI.innerHTML = "";
    snap.forEach((childSnap) => {
      //* Key va stocker les ID
      let key = childSnap.key;
      let value = childSnap.val();
      let $li = document.createElement("li");
      $li.setAttribute("user-key", key);
      $li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
      userListUI.append($li);
    });
  });
}
*/

function userClicked(event) {
  //* on récupère l'id des USERS via l'attribut user-key que l'on a placé
  //* durant la lecture de la BDD (cf. la fonciton readUserData(vers la fin, le setAttribute)).
  let userID = event.target.getAttribute("user-key");
  console.log(userID);
  //* Maintenant qu'on à l'id de l'utilisateur sur lequel on a click
  //* on peut viser 1 utilisateur précisément dans la BDD
  const userRef = dbRef.child("users/" + userID);
  userRef.on("value", (snap) => {
    console.log(snap);
    //* Par précautions on vide le innerHTML de la div qui affiche les details
    userDetailUI.innerHTML = "";
    //* On parcourt avec un foreach les données d'un user
    snap.forEach((childSnap) => {
      console.log(childSnap);
      //* pour chaque données on crée un <p></p> (pour l'age, le mail, le name)
      let $p = document.createElement("p");
      $p.setAttribute("class", "card-text");
      $p.innerText = childSnap.key + " - " + childSnap.val();
      userDetailUI.append($p);
    });
  });
};

function editButtonClicked(event) {
  formUserEditUI.style.display='block';
  formUserUI.style.display='none';
  // On récupère l'id de l'input hidden
  let inputId =document.querySelector(".edit-userid");
  inputId.value = event.target.getAttribute("userid");
  //* on vise le bon user dans la BDD via son ID 
  const userRef = dbRef.child('users/' + inputId.value);
  //* On selectionne les input du formulaire d'édition pour les pré-remplir
  const editUserInputsUI = document.querySelectorAll(".edit-user-input");
  userRef.on("value", snap => {
    //*Avec une boucle On pré rempli le formulaire pour editer (en récupérant les key et valeurs)
    for(let i = 0, len = editUserInputsUI.length; i < len; i++) {
        let key = editUserInputsUI[i].getAttribute("data-key");
                editUserInputsUI[i].value = snap.val()[key];
    }
  });
  //* On place un addEventListener sur le bouton 'save' du formulaire 
  //* Cela appellera la fonction saveUserBtnClicked qui elle se chargera d'enregistrer en BDD
  //* l'utilisateur que l'on vient d'éditer 
  const saveBtn = document.querySelector("#edit-user-btn");
  saveBtn.addEventListener("click", saveUserBtnClicked);  
};

function saveUserBtnClicked() {
    //* On récupère l'id de l'utilisateur
    const userID = document.querySelector(".edit-userid").value;
    //* avec cet id on fait une référence à cet utilisateur dans la BDD
    const userRef = dbRef.child('users/' + userID);
    //* on crée un objet vide pour le moment
    let editedUserObject = {};
    //* on selectionne tous les input du formulaire d'édition
    let editUserInputsUI = document.querySelectorAll('.edit-user-input');
    //* On fait une boucle sur ces inputs pour remplir notre objet
    editUserInputsUI.forEach(function(textField) {
      //* On rempli l'objet
      let key = textField.getAttribute("data-key");
      editedUserObject[key] = textField.value;
    });
    //* Une fois l'objet rempli on l'update dans la BDD
    userRef.update(editedUserObject);
    //* pour le confort on fait disparaitre le formulaire d'édition et re apparaitre celui d'ajout
    formUserEditUI.style.display = 'none';
    formUserUI.style.display = 'block';
};

function deleteButtonClicked(event) {
  const userID = event.target.getAttribute("userID");
  const userRef = dbRef.child('users/' + userID);
  userRef.remove();
}
