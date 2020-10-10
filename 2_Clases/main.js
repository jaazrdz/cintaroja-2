//Clase 
// Las clases incia con mayuscula
class Auto {
    // método especial

    // cuando tu creas un nuevo auto asignale por default 5 llantas

    constructor(color, matricula, motor) {
        this.llantas = 5;
        this.color = color;
        this.matricula = matricula;
        this.motor = motor;
        this.volante = true;
        this.encendido = false;
    }

    //Métodos
    //Setter
    encender() {
        if (this.encendido === false) {
            this.encendido = true;
            return "El auto " + this.color + " ha sido encendido y tiene un motor " + this.motor + ".";
        } else {
            return "Debes apagar primero el auto para volver a encenderlo";
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            return "El auto " + this.color + " ha sido apagado";
        } else {
            return "Querido usuario, el auto ya está apagado.";
        }
    }
    // Cambiar Motor
    cambiarMotor(nuevoMotor) {
        this.motor = nuevoMotor
        return "El motor de tu coche ha sido cambiado ahora es " + this.motor + "."

    };

    // Getters
    obtenerMatricula() {
        return this.matricula;
    }

    // Evaluar si el motor es electrico
    // En un enunciado devolver todas las caracteristicas del auto
    // si el aut es electrico, menciona que no necesita gasolina

    obtenerResumen() {

        if (this.motor === "electrico") {
            return "El auto es de color " + this.color + "y tiene " + this.llantas + " llantas además su matricula es " + this.matricula + ". El auto es electrico no necesita gasolina"
        } else {
            return "El auto es de color " + this.color + "y tiene " + this.llantas + " llantas además su matricula es " + this.matricula + ". Este auto necesita gasolina"
        }
    };


    pintarAuto(nuevoColor) {
        this.color = nuevoColor;
        return "Tu auto esta listo y su nuevo color es " + this.color + "."
    }
}

//--- INSTANCIA  de mi clase auto 
var miAuto = new Auto("azul", "d1234", "V6");
var elAuto = new Auto("rojo", "DFRET23", "V4");


// Encender Auto, Apagar, apagar, encender, imprme objeto
console.log(miAuto.encender());
console.log(miAuto.apagar());
console.log(miAuto.apagar());;
console.log(miAuto.encender());
console.log(miAuto.cambiarMotor("Diesel"));
console.log(miAuto.pintarAuto("verde"));
console.log(miAuto.obtenerResumen());
console.log(miAuto);







