// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const recursivoFatorial = n => (n === 1) ? 1 : n * recursivoFatorial(n-1);
console.log(recursivoFatorial(5));

function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    } 
    return n * calcularFatorialRecursivamente (n - 1);
}

console.log(calcularFatorialRecursivamente(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = word => 