º//  Convierte Celsius a Fahrenheit

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
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let a = arr[i][0]
        for (let j = 1; j < arr[i].length; j++){
            if (arr[i][j] > a){
                a = arr[i][j];
            }
        }
        result.push(a);
    }
    return result;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//  Confirma el final

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");



// Repite una cadena repite una cadena

function repeatStringNumTimes(str, num) {
    let acumulado = "";

  for (let i = 0; i < num; i++){
    acumulado += str;
  }
  return acumulado;
}
console.log(repeatStringNumTimes("abc", 3));



// Recorta una cadena

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



// Buscadores guardianes

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    num = arr[i];
    if (func(num)){
        return num;
    }
  }
  return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



// Boo who (Booleano Quién)

function booWho(bool) {
  if (bool === true || bool === false){
    return true;
  }
  return false;
}
console.log(booWho("false"));



// Haz que la primera letra de una palabra este en mayúscula

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
console.log(titleCase("I'm a little tea pot"));



//  Cortar y rebanar

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



//  Rebote falsy

function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));



//  Dónde pertenezco

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
                return i;
}
  return arr.length;
}
console.log(getIndexToIns([40, 60], 50));



//  Mutaciones

function mutation(arr) {
        let test = arr[1].toLowerCase();
        let target = arr[0].toLowerCase();
        for (let i = 0; i < test.length; i++) {
                if (target.indexOf(test[i]) < 0) return false;
        }
        return true;
}
console.log(mutation(["hello", "hey"]));



//  Monito Trocitos
// pendiente de revisar para estudiarlo

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

