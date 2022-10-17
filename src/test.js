// prueba fibonacci con recursion

function fibonacciFunction(n){
    const arr = [];
    return n < 2 ? n : fibonacciFunction(n-1) + fibonacciFunction(n-2);
}
const s =fibonacciFunction(10);
console.log(s);
