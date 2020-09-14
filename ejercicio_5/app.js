
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
let mostrarPersona = function (persona){
    let personaEncontrada= persona.results[0];
    console.log("Nombre: " + personaEncontrada.name.first + " " +personaEncontrada.name.last);
    console.log("Genero: " + personaEncontrada.gender);
    console.log("Pais: "+ personaEncontrada.location.country + " -Estado: " + personaEncontrada.location.state + " -Ciudad: " + personaEncontrada.location.city + " -Calle: " + personaEncontrada.location.street.name+ " -Numero: " + personaEncontrada.location.street.number + " -Codigo postal: " + personaEncontrada.location.street.postcode);
    console.log("Email: "+ personaEncontrada.email)                                                
    console.log("Usuario: " + personaEncontrada.login.username);
    console.log("Password: " + personaEncontrada.login.password);
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(mostrarPersona);
