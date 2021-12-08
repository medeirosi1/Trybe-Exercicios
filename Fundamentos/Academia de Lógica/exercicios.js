// 02 - Contar até 10

let limit = 20
let soma = 0;

function accumulator(limit){
    for(let index = 0; index <= limit; index += 1){
        soma += index
    }
    console.log(soma)
    
}

accumulator(limit)
module.exports = accumulator;


// 06 - Retorne os números ímpares

let n = 50;
let resultado = ""

function oddNumbers(n){
    for (index = 1; index <= n; index += 2){
     resultado = resultado + index + ", ";
    }
    console.log(resultado);
  }
  oddNumbers(n);
  module.exports = oddNumbers;