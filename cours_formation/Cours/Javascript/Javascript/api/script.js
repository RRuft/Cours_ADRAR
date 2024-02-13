// console.log(magics);
//     for (const magic of magics.cards){
//         const div = document.querySelector("div");
//         const img = document.createElement("img");
//         img.setAttribute("src", magic.imageUrl);
//         const newP = document.createElement("p");
//         div.appendChild(img);
//         div.appendChild(newP);
//         newP.innerText = magic.artist;
//     };
// magicCartes();

async function attrapezLesTous(){
    const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
    const response = await fetch(url);
    const pokemons = await response.json();
   // console.log(pokemons);

    for (const pokemon of pokemons){
        const template = document.querySelector("template").content;
        const container = document.querySelector(".container");
        const newPoke = template.cloneNode(true);
        newPoke.querySelector(".pokedexId").innerText=pokemon.id;
        newPoke.querySelector(".name").innerText=pokemon.name;
        newPoke.querySelector("img").setAttribute("src", pokemon.image);
        container.appendChild(newPoke);

    }
}
attrapezLesTous();