//  Utiliza el operador de propagación para evaluar los arreglos en el lugar

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);


//  Usa sintaxis de desestructuración para extraer valores de objetos

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;


//  Usa sintaxis de desestructuración para asignar variables desde objetos

function ALTAS(){
    const ALTAS_TEMPERATURAS = {
        Hyesterday: 75,
        Htoday: 77,
        Htomorrow: 80
    };
    
    const { Htoday : highToday, Htomorrow : highTomorrow } = ALTAS_TEMPERATURAS;    
}


//  Usa sintaxis de desestructuración para asignar variables desde objetos anidados

function FORECAST(){
    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };
    const { today: {low: lowToday, high: highToday} } = LOCAL_FORECAST; 
}


//  Usa sintaxis de desestructuración para asignar variables desde arreglos

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};


// Escribe funciones breves y declarativas con ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    return this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);


// Usa sintaxis de clases para definir una función constructora

class Vegetable{
  constructor(name){
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);


// Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    get temperature(){
        return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius){
        this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
}


// Reutiliza código de JavaScript utilizando import

import {uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");


// Use * para importar todo de un archivo

import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// Crear un fallback de exportación con export default

export default function subtract(x, y) {
  return x - y;
}


// Importa una exportación por defecto

import subtract from './math_functions.js'
subtract(7,4);


// Crea una promesa de JavaScript

const makeServerRequest = new Promise((resolve, reject) => {

});


// Cumpleta una promesa con "resolve" y "reject"

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;
  if (responseFromServer){
    resolve("We got the data");
  }
  reject("Data not received");
});


// 