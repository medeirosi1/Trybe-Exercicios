let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for(var i = 0; i < numbers.length; i += 1){
    
    soma += numbers[i];
    console.log(soma);
} 

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;
let media = 0
for(var i = 0; i < numbers.length; i += 1){
    
    media = (soma += numbers[i]) / numbers.length;  
   
} 
console.log(media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma = 0;
let media = 0
for(var i = 0; i < numbers.length; i += 1){
    media = (soma += numbers[i]) / numbers.length;    
} 
if  (media > 20){
    console.log("Valor maior que 20")     
}  else {
    console.log("Valor menor ou igual a 20")
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;


let numeroMaior = numbers[0];
for(var i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > numeroMaior){
        numeroMaior = numbers[i]
    }
}
console.log(numeroMaior);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


for(i = 0; i < numbers.length; i += 1){
    let numeroImpar = numbers[i] % 2
  if(numeroImpar == 1)
    console.log(numbers[i]);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numeroMenor = numbers[0];
for(var i = 0; i < numbers.length; i += 1) {
    if(numbers[i] < numeroMenor){
        numeroMenor = numbers[i]
    }
}
console.log(numeroMenor); 

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (i = 1; i <= 25; i += 1){
    array.push(i);
    
}
console.log(array);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];
for (i = 1; i <= 25; i += 1){ 
  let divisao = array.push(i)/2
    console.log(divisao);
}

