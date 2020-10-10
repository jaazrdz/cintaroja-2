// funcion
// funcion que de el area de un trapecio

//Trapecio
//a= (B+b) /2 * h 
//................Parametros
function trapecio(B, b, h) {
    var area = ((B + b) / 2) * h;
    return area;
}

//console.log(trapecio(15,12,6));

// Objetos Literales

var perro = {
    // llave: valor
    nombre: "Ayudante de Santa",
    edad: 30,
    vivo: true,
    raza: "callejero",
    juguetes: ["pelota", "peluche", "hueso", "mordedera"],  // ARRAY
    familia: { // Un objeto dentro de otro objeto
        padre: "homero",
        madre: "marge",
        hermano: "bart",
        hermana: "lisa"
    },

    // Métodos
    juega: function(juguete){
        //console.log(this.nombre);
        // si la longitud de juguetes es:
        if(juguete < 4 && juguete >= 0) {
            return this.nombre + " esta jugando con " + this.juguetes[juguete];
        } else {
            return "El perro no encontro el juguete";
        }   
    }

}

//console.log(perro.familia.padre);
//console.log(perro.juega(8))


// las funciones son como cajas negras, puede que no reciban ningun valor y 
// y al final me dan un Reultado.

/* 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)*/

    var myPenguin = {
        character: "Duke",
        origin: "Boners Ark",
        creator: "Mort Walker",
    }
 
    /*Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"*/

/*Escribe otra línea de código que añada una nueva propiedad a tu 
pingüino llamada puedeVolar y asignalo a falso.
Nota: No modifiques el código original donde definiste a tu pingüino*/

myPenguin.puedeVolar = false;

/*Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.*/

    myPenguin.graznar = function () {
        console.log("kaww kaww!");
    };

    //myPenguin.graznar();

    //console.log("Hola, soy un pinguino y mi nombre es " + myPenguin.character)
    

   /* 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.*/

myPenguin.saludar = function(){
    console.log( "Hola, soy un pinguino y mi nombre es " + this.character)
    
};

myPenguin.saludar()

