//             0    1  2   3    4
const array = [10, 23, 24, 45, 66];

//Iterar arreglo => Manera Imperativa 
//      0    ; 0 <= 5          ; 1
//      1    ; 1 <= 5          ; 2
//      2    ; 2 <= 5          ; 3
//      3    ; 3 <= 5          ; 4
//      4    ; 4 <= 5          ; 5
//      5    ; 5 <= 5          ; undefined

/*for(let i = 0; i < array.length; i++) {
console.log(array [i]);
}*/

//Declarativa 

//const eachArray = array.forEach ((value) => console.log (value));
//console.log(eachArray);
['0-10', '1 - 23', '2 - 24', '3 - 45', '4 -66' ]


//Manera Imperativa 
/*const nuevoArreglo = [];

for(let i = 0; i < array.length; i++) {
    nuevoArreglo[i] = `${i} - ${array [i]}`;
}

console.log(nuevoArreglo);*/

//Manera Declarativa
const nuevoArreglo = array.map( (value, index) =>  `${index} - ${value}`);

console.log(nuevoArreglo);

const paises = [ 'Colombia', 'Mexico', 'Costa Rica', 'Perú', 'Republica Dominicana', 'Venezuela']

//const nuevoPaises = [];  // se declara un arreglo vacio


//Imperativa
/*for ( let i =0; i < paises.length; i++) { // acomoda de manera ascendente mis elementos del arreglo,con cada vuelta da una ITERACION
    if(paises [i].length <= 6){
        nuevoPaises[i] = paises [i];
    }
}*/

//Declarativa

const nuevoPaises = paises.filter((value) => value.length <= 6);
console.log(nuevoPaises);

