var { Largometraje } = require("./Largometraje");

//subclase
class Pelicula extends Largometraje {
    constructor(titulo, duracion, director, genero) {
        super(titulo, duracion, director);
        this.precio = 50;
        this.genero = genero;
    }
}

var yaNoEstoyAqui = new Pelicula ("Ya no estoy aquí", 180, "Hernandez", "drama");
var sangreXsangre = new Pelicula ("Sangre por Sangre", 120, "Desconocido", "accion");

module.exports = { yaNoEstoyAqui, sangreXsangre}