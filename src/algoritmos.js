//  Convierte Celsius a Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
convertCtoF(30);


//  Invierte una cadena

function reverseString(str) {
    let newStr = ""
    for (let i = str.length - 1; i > 0; i--){
        newStr += str[i];
    }
}
reverseString("hello");


//  