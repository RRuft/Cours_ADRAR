//Tony Stark 
/*
function desamorçage(num){
    let result=0;
    for(let i=0;i<num;i++){
        if(i%3==0 || i%5==0){
            result=result+i;
        }
    }
    return result;
}

console.log(desamorçage(1435));
*/
//Les bombes
function multipleBombe(num){
    let n = num % 1000;
    let u = (num - n) / 1000;
    for(let i=0; i<n;i++){
        u *= 13;
        u %= 1000;
   }
   return u;
}

console.log(multipleBombe(797114));

// Les Boeufs
// fonction qui reçoit une combinaison de 3 nombres et qui retourne vrai si la combinaison est correcte.
function boeuf(roux,noir,blanc){
    let total = roux + noir + blanc;
    
    if (noir > blanc*2){
        return false;
    }

    if (total > 1000) {
        return false;
    } 

    if ( blanc > roux || roux > noir ){
        return false;
    }
    
    if (roux * noir * blanc != total*777){
        return false;
    }

    return true;
}
   
for (let roux = 1; roux <= 1000; roux++){
    for (let noir = 1; noir <= 1000; noir++){
        for (let blanc = 1; blanc <= 1000; blanc++){
            //si la combinaison roux,noir,blanc est correcte, c'est gagné, on affiche roux,noir,blanc
            if (boeuf(roux,noir,blanc)){
                console.log(roux,noir,blanc)
            }
        }
    }
} 


//Les pommes
let pommes = 0;
let totalPommes = 0;
for(let i=1;i<=50;i++){
    pommes = i*i;
    if(pommes%3==0){
        totalPommes += pommes;
        
    }
}
console.log(totalPommes);