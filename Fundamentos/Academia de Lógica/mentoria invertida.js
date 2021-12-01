// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.

function quadrilatero (base,altura){
    let resultado = {
        perimetro : (2 * base) + (2 * altura),
        area: (base * altura)
    };
    return resultado;
};
console.log(quadrilatero(10,20));

// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }


function imparesEPares(numeros){
 
    let resultado = {
        par: 0,
        impar: 0,
    };
    
    for (i = 0; i < numeros.length; i += 1){
        if(numeros[i] % 2 == 0){
            resultado.par += 1;
        } else {
            resultado.impar += 1;
        };
    };
    return resultado;
};

console.log(imparesEPares([0,1,2,3,4,5,6,7,8,9,10]));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
//Valor de teste: ‘trybe’ e ‘be’
//valor esperado no retorno da função: true
//verificaFimPalavra(‘trybe’, ‘be’);
//Retorno esperado: true
//verificaFimPalavra(‘joaofernando’, ‘fernan’);
//Retorno esperado: false;
//Dica: Use o SPLIT.

//Solução com a função endsWith:

function verificaString(palavra, ending){
  let resultado = false;
  if(palavra.endsWith(ending)){
    resultado = true;
  }
  return resultado;
}
console.log(verificaString("trybe", "be"));

//Solução com a função split:

function verificaFimPalavra(word, ending){
  let resultado =  word.split(ending);
  if(resultado[resultado.length-1] === ''){
    return true;
  }
  else
    return false;
}