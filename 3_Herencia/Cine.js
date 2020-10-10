var { nuestroPlaneta, elSembrador } = require("./Documental");
var { yaNoEstoyAquí, sangreXsangre } = require ("./Pelicula");

class Cine {
    constructor(cadena, salas, ubicacion){
        this.cadena = cadena;
        this.salas = salas;
        this.ubicacion = ubicacion;
    }

    reproducirLargometraje(largometraje){
        if(largometraje.precio < 80 ){
            //Pelicula
            return 'Se esta reproduciendo ' + largometraje.titulo + ' su genero es ' + largometraje.genero + ', es una película.'
        } else {
            //Documental
            return 'Estas viendo el documental ' + largometraje.titulo + ', el narrador es ' + largometraje.narrador + ' y es patrocinado por ' + largometraje.patrocinador
        }
    }
}

var cinepolis = new Cine ('Cinepolis', 9, 'Monterrey');

console.log(cinepolis.reproducirLargometraje(nuestroPlaneta));
console.log(cinepolis.reproducirLargometraje(sangreXsangre));



