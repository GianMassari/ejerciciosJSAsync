
const obtenerPokemon = require("./library");
let verPokemon = function(pokemon){
    
    console.log(pokemon.name);
    console.log("Habilidades:");
    pokemon.abilities.forEach(element => {
        console.log("-"+ element.ability.name);
    });
    
}
// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
let nombrePokemon="pikachu";
obtenerPokemon(nombrePokemon)
.then((pokemon) => {
    verPokemon(pokemon);
}).catch((err) => {
    console.log("No se encontro el pokemon");
});
