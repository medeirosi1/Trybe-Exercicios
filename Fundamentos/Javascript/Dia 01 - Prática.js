// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

/* const a = 10;
const b = 2;

console.log(a + b, a - b, a * b, a / b, a % b); */

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

/* const valor1 = 20;
const valor2 = 30;

if (valor1 > valor2){
    console.log("1 > 2");
} else {
    console.log("2 > 1");
} */

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

/* const valor1 = 20;
const valor2 = 30;
const valor3 = 15;

if (valor1 > valor2 && valor1 > valor3){
    console.log("valor 1");
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log("valor 2");
} else {
    console.log("valor 3");
} */

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/* const valor = -10;

if (valor > 0){
    console.log("Positivo");
} else if (valor < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
} */

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

/* const a = 60;
const b = 60;
const c = 50;

if ((a + b + c) === 180){
    console.log(true);
} else if (a && b && c < 0){
    console.log("Ângulo Inválido");
} else if ((a + b + c) !== 180){
    console.log(false);
}   */ 

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

/* const xadrez = 'Bispo';

switch (xadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}; */

// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

/* const nota = 45;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
} */

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

/* const a = 7;
const b = 3;
const c = 1;

const resultado = (a % 2 === 0 || b % 2 === 0 || c % 2 === 0);
let falso = false;

if (resultado){
   falso = true;
};
console.log(falso); */

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

/* const a = 6;
const b = 3;
const c = 2;

const resultado = (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0);
let falso = false;

if (resultado){
   falso = true;
};
console.log(falso); */

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

