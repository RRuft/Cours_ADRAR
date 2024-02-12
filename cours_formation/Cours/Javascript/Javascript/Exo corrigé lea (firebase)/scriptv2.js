

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
    userListUI.innerText = "";
    snap.forEach((childSnap) => {
      let key = childSnap.key;
      let value = childSnap.val()
      let $li = document.createElement('li');
      $li.innerHTML = value.name;
      $li.setAttribute("user-key", key)
      userListUI.append($li);
    })
    $li.addEventListener("click", userClicked);
    userListUI.append($li);
  })
};
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
  const userDetailUI = document.querySelector('#user-detail');
  userRef.on("value", snap => {
    userDetailUI.innerHTML = "";
  })
  snap.forEach(childSnap => {
    
  });
};

function editButtonClicked(event) {

};

function saveUserBtnClicked() {

};

function deleteButtonClicked(event) {

}