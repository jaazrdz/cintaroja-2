//Clase Mascota => Super Clase / Clase Padre

class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
    }

    alimentarse() {
        return this.nombre + " se esta alimentando."
    }
}
// Subclase de Mascota

class Perro extends Mascota {
    //Método constructor
    constructor(nombre, patas, cola, raza) {
        //super constructor
        super(nombre, patas);
        this.ladra = true;
        this.cola = cola;
        this.raza = raza;
    }
    truco() {
        return this.nombre + " está dando la pata";
    }
};

//Subclase de Mascota
class Serpiente extends Mascota{
    constructor(nombre, color) {
        super(nombre, 0);
        this.color = color;
        this.veneno = false;
    }

    morder(){
        return this.nombre + " te mordió.";
    }

    mudarPiel(){
        return this.nombre + " ha mudado su piel " + this.color;
    }
};

var flappy = new Perro("flappy", 4, true, "salchicha");
var chuy = new Mascota("chuy", 4);
var snipper = new Serpiente ("Snipper", "negra");

console.log(chuy.alimentarse());
console.log(snipper);