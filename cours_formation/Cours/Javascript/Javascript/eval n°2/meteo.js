let cardMeteo = document.querySelector('.cardMeteo');
let buttonCharger = document.querySelector('button');
let containt = document.querySelector('body');

let info = document.createElement('div');

info.style.height = '300px';
info.style.width = '200px';
info.style.marginTop = '16px';
info.style.marginBottom = '16px';
info.style.border = '3px solid grey';
info.style.paddingTop = '16px';
info.style.paddingRight = '12px';
info.style.paddingLeft = '12px';
info.style.paddingBottom = '24px';

cardMeteo.insertBefore(info, buttonCharger);

function button(){
    buttonCharger.classList.add("button__cardMeteo");
}

buttonCharger.addEventListener('mousedown',()=>{
    buttonCharger.style.backgroundColor = 'orange';
})

containt.addEventListener('mouseup',()=>{
    buttonCharger.style.backgroundColor = '';
})

buttonCharger.addEventListener('click',async function(){
    let url = 'https://prevision-meteo.ch/services/json/toulouse';
    let response = await fetch(url);
    let meteo = await response.json();
    console.log(meteo)
    info.innerText ="La meteo est : " + meteo.current_condition.condition + " et la température est de : " + meteo.current_condition.tmp +"°C " + "La temperature max : " + meteo.fcst_day_0.tmax +"°C " + "et la min est de : " + meteo.fcst_day_0.tmin + "°C";
    button();
})

