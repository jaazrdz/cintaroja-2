class Banda {
    constructor(nombre, website, anio, genero) {
        this.nombre = nombre ? nombre : 'No encontrado';
        this.website = website ? website : 'Web no encontrado';
        this.anio = anio ? anio : 'Fundación no encontrada';
        this.genero = genero ? genero : 'Género no encontrado';
    }
}

module.exports = { Banda };

//Operadores ternarios
//const edad = 24;
//const resultado = edad >= 18 ? 'Eres mayor de edad': 'Eres menor de edad'
//console.log(resultado);

/*
if ( edad >= 18){
    console.log('Eres mayor de edad');
}else {
    console.log('Eres menor de edad')
}

*/