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

function addUserBtnClicked() {
  let addUserInputsUI = document.getElementsByClassName('user-input');
  let NewUser = {};
  for(let i=0;i<addUserInputsUI.length;i++){
    let key = addUserInputsUI[i].getAttribute('data-key');
    let value = addUserInputsUI[i].value;
    NewUser[key] = value;
  }
  usersRef.push(NewUser);
  console.log(`Nouvel utilisateur enregistré`);
  console.log(`Nom : ${NewUser.name} et age : ${NewUser.age}`);
  formUserUI.reset();
};

function readUserData() {
  usersRef.on('value',(snap)=>{
    userListUI.innerText = '';
    snap.forEach((childSnap)=>{
      let key = childSnap.key;
      let value = childSnap.val();
      let li = document.createElement('li');
      li.innerText = value.name;
      li.setAttribute('user',key);
      userListUI.append(li);      
    });
  });
};

function userClicked(event) {

};

function editButtonClicked(event) {

};

function saveUserBtnClicked() {

};

function deleteButtonClicked(event) {

}