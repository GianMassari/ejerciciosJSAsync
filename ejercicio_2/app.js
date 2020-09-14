
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
function mostrarChiste(chiste){
    let chisteDownloaded=chiste[0];
    console.log(chisteDownloaded.setup);
    console.log(chisteDownloaded.punchline);
}

obtenerChiste()
.then((chiste) => {
    mostrarChiste(chiste);
}).catch((err) => {
    console.log("No se encontro el chiste")
});