function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length;  i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product += arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


// Itera con el bucle "do...while" de JavaScript

const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while ( i < 5 ); 
console.log(myArray);


//  Reemplaza bucles usando recursión

function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if (n <= 0){
        return 0;
    } else {
        return sum(arr, n - 1) + arr[ n - 1];
    }
    // Cambia solo el código encima de esta línea
    }  console.log(sum([1, 5, 4, 2,], 3)); 


//  FizzBuzz

function fizzBuzz(num1, num2){
    for (let i = 1; i <= 100; i++) {

        let mess = "";

        if ( i % num1 === 0 && i % num2 === 0 ) {
            console.log("FizzBuzz");
        } else if ( i % num1 === 0 ){
            console.log("Fizz");
        } else if ( i % num2 === 0 ){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
s = fizzBuzz(5, 2);
console.log(s);


// Reemplaza bucles usando recursión

function sum(arr, n) {
    if (n <= 0){
        return 0;
    } else {
        return sum(arr, n - 1) + arr[ n - 1];
    }
}  console.log(sum([1, 3, 2], 5));


// Fibonacci

function obtenerFibonacci(n){
    fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return(fib);
}  console.log(obtenerFibonacci(10));


//  Genera fracciones aleatorias con JavaScript

function randomFraction(){
    return Math.random();
}  console.log(randomFraction());


//  Genera números enteros aleatorios con JavaScript

function randomWholeNum(){
    return Math.floor(Math.random() * 10) * 20;
}  console.log(randomWholeNum());


//  Genera números enteros aleatorios dentro de un rango

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}  console.log(randomRange(10, 20));


//  Utiliza la función "parseInt"

function convertToInteger(str) {
    return parseInt(str);
}  console.log(convertToInteger("56"));
  

  //  Utiliza la función "parseInt" con Radix (Base) para pasar de binario a decimal, en base a 2

function convertFromBinaryToInteger(str){
    return parseInt(str, 2);
}  console.log(convertFromBinaryToInteger("1101011"));


//  Usa el operador condicional (ternario)

function checkEqual(a, b){
    return a == b  ? "Equal" : "Not Equal";
}  console.log(checkEqual(12, 8));


// Usa múltiples operadores condicionales (ternarios)

function checkSign(a){
    return ( a > 0 ) ? "positive" : ( a < 0 ) ? "negative" :  "zero";
}  console.log(checkSign(3));


//  Utiliza recursión para crear una cuenta regresiva

function countDown(n){
    if (n < 1){
        return [];
    }
    else {
        const arr = countDown(n - 1);
        arr.unshift(n);
        return arr;
    }
}  console.log(countDown(10));


//  Usa recursión para crear un rango de números

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum){
        return [];
    }
    else {
        const number = rangeOfNumbers(startNum, endNum - 1);
        number.push(endNum);
        return(number);
    }
}  console.log(rangeOfNumbers(4, 19));


