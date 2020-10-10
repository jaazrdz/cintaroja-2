var { Largometraje } = require("./Largometraje");

class Documental extends Largometraje {
    constructor(titulo, duracion, director, narrador, patrocinador) {
        super(titulo, duracion, director);
        this.precio = "$" + 80;
        this.narrador = narrador;
        this.patrocinador = patrocinador
    }

}

var nuestroPlaneta = new Documental("Nuestro Planeta", 60, "Stallone", "Adam Sandler", "NatGeo");
var elSembrador = new Documental ("El Sembrador", 120, "Christian Bale", "Luis Miguel", "Netflix");

console.log("Se ejecuto Documental.js")
module.exports = {nuestroPlaneta, elSembrador};