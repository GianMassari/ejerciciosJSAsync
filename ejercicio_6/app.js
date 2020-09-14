
const obtenerPersonaFake = require("./library");

let mostrarPersona = function (persona){
    let personaEncontrada= persona.results[0];
    console.log("Nombre: " + personaEncontrada.name.first + " " +personaEncontrada.name.last);
    console.log("Genero: " + personaEncontrada.gender);
    console.log("Pais: "+ personaEncontrada.location.country + " -Estado: " + personaEncontrada.location.state + " -Ciudad: " + personaEncontrada.location.city + " -Calle: " + personaEncontrada.location.street.name+ " -Numero: " + personaEncontrada.location.street.number + " -Codigo postal: " + personaEncontrada.location.postcode);
    console.log("Email: "+ personaEncontrada.email)                                                
    console.log("Usuario: " + personaEncontrada.login.username);
    console.log("Password: " + personaEncontrada.login.password);
}

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake()
.then((persona)  => {
 mostrarPersona(persona);
}).catch((err) => {
    console.log("No se encontro la persona");
});

