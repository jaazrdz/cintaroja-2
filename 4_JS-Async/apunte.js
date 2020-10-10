//Lenguajes de bajo nivel 
//Nos comunicamos con una computadora (Ensamblador)

//Lenguajes de alto nivel
//Compilados
//C, C++ (Codeblocks)

//Pseudocompilados
//java (Byte code => Maquina virtual)

//Interpretados
//JavaScript
//Python

//--------------------------------------

// Javascript => ES6 (JS Moderno) 2015
//(Chrome, IE, Edge, Safari, Firefox y Opera)

var nombre = "Gera";

let edad = 24;

edad = 25;

//Error 
const pi = 3.1416;
const array = [];
const objeto = {};

//Funciones
/* function suma (a, b){
    return a + b;
};*/

//Arrow function
const suma = ( a, b) => a + b;

const saludo = nombre => 'Hola' + nombre;

console.log (suma (1,5));
console.log (saludo(" jazmin"));

//Decodificación de caracteres

//const infoMascota = (nombre, raza, juguete) => "mi mascota se llama" + nombre + "es un" + raza + "y su juguete favorito es" + juguete 
const infoMascota = (nombre, raza, juguete) => `Mi mascota se llama ${nombre}, es un ${raza} y su juguete favorito es ${juguete}`;

console.log(infoMascota("lolo", "salchicha", "pelotaa"));

