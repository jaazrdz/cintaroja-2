// ECMA 5 
var persona = 'jaz';

// ECMA 6
let personaLet =  ['',2]; //
const personaConst = "jaz" //

personaLet = "Pablo"


// condicion objetos y arrays
const obj = {};
const arry = [];

arry.push('Mali')


/* Tipos de datos para variables

String '' "" ´
Number  12345
Boolean  Valor de si o no, true/false

*/
/*

let isFun = true;

let isRain = true; 
 
if(isRain) {
    alert ('Lleva sombrilla');
} else {
    alert ('disfruta tu caminata');
}
*/
function nombreFuncion (parametro){

}

function nombreFuncion (parametro){
    return 'algo';
}

let perro = {
    nombre: 'Ayudante de Santa',
    color: 'café',
    noPatas: 4,
    tieneDueño: true,
    ladrar (aQuien, estaDormido) {
        if(estaDormido) {
        return 'esta dormido'; // si esta dormido acá termina el codigo
        }
        if(aQuien){
            return 'hay a quien ladrar';
        }
        //console.log('guau, guau, quien eres?');
        return 'no hay a quien ladrar';
    },
};
 
console.log (perro.noPatas);
console.log (perro.ladrar());

if (perro.ladrar('gato')=== 'esta dormido') {
    alert ('Despierta!')
    // pedazo de codifo que haga algo si el perro ladra
} else if (perro.ladrar('gato') === 'hay a quien ladrar'){
    console.log('Hay ese perro siempre de escandaloso');
}else if (perro.ladrar ('gato') === 'no hay a quien ladrar'){
    console.log('y ahora que tendra el perro que no hace ruido');
}else {
    console.log ('Hubo un error');
}