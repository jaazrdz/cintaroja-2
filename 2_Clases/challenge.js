/*Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura*/

class Persona {
	constructor(nombre, edad, sexo, peso, altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	};

	calcularIMC() {
		return "El IMC de " + this.nombre + " es: " + (this.peso / (this.altura * this.altura))

	};

	esMayorDeEdad() {
		if (this.edad >= 18) {
			return "Es mayor de edad";
		} else {
			return "Aun es menor de edad"
		};
	}

};

var carlitos = new Persona("Carlitos", 23, "Masculino", 67, 1.90);

//console.log(carlitos.esMayorDeEdad());



/* Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/

class Cuenta {
	constructor(titular, cantidad) {
		this.titular = titular;
		this.cantidad = cantidad;
	};

	ingresar(cantidad) {
		if (this.cantidad + cantidad > 900) {
			return "Estas superando el limite de $900; opearicón cancelada";
		} else {
			this.cantidad += cantidad;
			return "Operación exitosa: Tu saldo es de  " + this.cantidad;
		}
	};

	retirar(cantidad) {
		if (this.cantidad - cantidad < 10) {
			return "No puedes dejar una cantidad menor a 10 en tu cuenta; operación cancelada";
		} else {
			this.cantidad -= cantidad;
			return "Operación exitosa: Tu saldo es de  " + this.cantidad;
		}
	};
}

var nuevaCuenta = new Cuenta("Andres",345);

console.log(nuevaCuenta.cantidad);
console.log(nuevaCuenta.ingresar(345));
console.log(nuevaCuenta.retirar(685));