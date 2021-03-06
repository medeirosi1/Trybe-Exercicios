//1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const nameGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (nome) => {
//   const employees = {
//     id1: nome('Pedro Guerra'),
//     id2: nome('Luiza Drumond'),
//     id3: nome('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(nameGenerator));

//2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberGenerator = () => {
 return Math.round(Math.random() * 4 + 1);
}

const sorteio = (number, funct) => {
    if (number === funct()){
        return 'Parabéns você ganhou'
    } else {
        return 'Tente novamente'
    }
}

// number === funct ? 'teste' : 'oi';

console.log(sorteio(2, numberGenerator));

//3. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const acertos = (gabarito, respostas, fution) => {
    let count = 0;
    for (let i = 0; i < gabarito.length; i += 1){
        const retorno = fution(gabarito[i], respostas[i]);
        count += retorno
    }
    return count
}

const checkResults = (certo, studentChute) =>{
    if(certo === studentChute){
        return 1;
    }
    if (studentChute === 'N.A'){
        return 0;
    }
    return -0.5;
}
console.log(acertos(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResults));