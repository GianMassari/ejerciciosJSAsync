
const obtenerChiste = require("./library");

// Codigo funcion callback
let verChiste = function(chiste){
    let chisteDescargado= chiste [0];
    console.log(chisteDescargado.setup);
    console.log(chisteDescargado.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(verChiste);
