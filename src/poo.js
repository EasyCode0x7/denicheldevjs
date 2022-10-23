//    Crea un objeto básico de JavaScript

let Dog = {
	name: "Affleck",
	numLegs: 4
}



// Utiliza notación de puntos para acceder a las propiedades de un objeto

let dog = {
  name: "Spot",
  numLegs: 4
}
console.log(dog.name, dog.numLegs);



// Crea un método en un objeto

let Perro = {
	name: "Spot",
	numLegs: 4,
	sayLegs: () => {return `This dog has ${Perro.numLegs} legs.`;}
}
console.log(Perro.sayLegs());



// Haz el código más reutilizable con la palabra clave "this"

let ddog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function(){
		return "This dog has " + this.numLegs + " legs.";
	}
}
ddog.sayLegs();



// Define una función "Constructor"

function Dogg(){
	this.name = "Sky";
	this.color = "White";
	this.numLegs = 4;
}



// Utiliza un constructor para crear objetos

function Dg(){
	this.name = "Rupert";
	this.color = "Brown";
	this.numLegs = 4
}
let hound = new Dg();



// Extender constructores para recibir argumentos

function D(name, color){
	this.name = name;
	this.color = color;
	this.numLegs = 4;
}
let terrier = new D("Bull", "Red");



// Verifica el constructor de un objeto con "instanceof"

function House(numBedrooms){
	this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;



// Comprender las propiedades directas

function Bird(name){
	this.name = name;
	this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary){
	if ( canary.hasOwnProperty(property) ) ownProps.push(property);
}
console.log(ownProps);



// Utiliza propiedades "prototype" para reducir código duplicado

function Doo(name){
	this.name = name;
}

Doo.prototype.numlegs = 2;
let beagle = new Doo("Snoopy");



// Itera sobre todas las propiedades

function Dgg(name){
        this.name = name;
}
Dgg.prototype.numLegs = 4;

let beagles = new Dgg("Snoopy");
let owNprops = [];
let protyypeProps = [];

