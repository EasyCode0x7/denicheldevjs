//  Convierte Celsius a Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
convertCtoF(30);


//  Invierte una cadena

function reverseString(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("hello"));


//  Factoriza un número

function factorialize(num) {
    let prod = 1;
    if (num === 0){
        return 1;
    }
    for (let i = 2; i <= num; i++){
        prod *= i;
    }
    return prod;
}
console.log(factorialize(5));


//  Encuentra la palabra más larga en una cadena

function findLongestWordLength(str) {
    let newStr = str.split(" ");
    let maxLength = 0;

    for (let i = 0; i < newStr.length; i++){
        if (newStr[i].length > maxLength){
            maxLength = newStr[i].length;
        }
    }
    return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


//  Devuelve los números mayores en los arreglos

function largestOfFour(arr) {
    return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//  