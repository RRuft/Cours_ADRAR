let template = document.querySelector('.template');

class User{
    constructor(nom,prenom,mail,phone,img){
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.phone = phone;
        this.img = img;
    }
    Display(){
        console.log(`Je suis ${this.nom} ${this.prenom}, mon mail : ${this.mail}, mon numéro de telephone : ${this.phone}, ma photo : ${this.img}`);
    }
    TemplateDisplay(){
        let paraOne = document.createElement('p');
        let paraTwo = document.createElement('p');
        let paraTree = document.createElement('p');
        let paraFour = document.createElement('p');
        let picture = document.createElement('img');
        paraOne.innerText = this.nom;
        template.appendChild(paraOne);
        paraTwo.innerText = this.prenom;
        template.appendChild(paraTwo);
        paraTree.innerText = this.mail;
        template.appendChild(paraTree);
        paraFour.innerText = this.phone;
        template.appendChild(paraFour);
        picture.src = this.img;
        template.appendChild(picture);
    }
}


let users = [
    new User('Bové','José','bovéjosé@gmail.com','0584256935','https://picsum.photos/200'),
    new User('Ruffat','Rémy','ruffatr@gmail.com','0685412563','https://picsum.photos/200'),
    new User('Mireille','Mathieu','matoudu09@gmail.com','0784523698','https://picsum.photos/200')
]

users.forEach((element) => {
    element.Display();
    element.TemplateDisplay();
});