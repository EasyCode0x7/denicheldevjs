// Combina arreglos con el operador de propagación

function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
console.log(spreadOut());


//  Comprueba la presencia de un elemento con indexOf()

function quickCheck(arr, elem) {
    return arr.indexOf(elem) !=-1;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//  Itera a través de todos los elementos de un arreglo utilizando bucles "for"

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].indexOf(elem) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//  Crea arreglos complejos multidimensionales

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];


//  Agrega pares clave-valor a objetos de JavaScript

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};  
foods['bananas'] = 13;
foods['grapes']
foods['strawberries'] = 27;
console.log(foods);


//  Modifica un objeto anidado dentro de un objeto

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);


//  Accede a los nombres de propiedad con la notación de corchetes

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    
}
console.log(checkInventory("apples"));
dd