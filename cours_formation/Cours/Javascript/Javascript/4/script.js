let title = document.querySelector('h1');
let toggle = true

title.addEventListener('click', ()=>{
    if(toggle){
        title.innerText = 'COUCOU LES LOULOUS';
        toggle = false;
    } else {
        title.innerText = 'DOM MACHIN TRUC';
        toggle = true;
    }    
});

