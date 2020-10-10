class Largometraje{
    constructor(titulo, duracion, director){
        this.titulo = titulo;
        this.duracion = duracion + " minutos";
        this.director = director
    }
}

var ejemplo = new Largometraje("Ejemplo", 120, "Desconocido");
//console.log(ejemplo)

//Destructuración de objeto 
var{ titulo, director} = ejemplo;
//console.log(director);


// La destructiración sirve cuando queremos exportar más clases, si existieran
// Ejem. clase1, clase 2

console.log("Se ejecuto Largometraje.js");
module.exports = {Largometraje};