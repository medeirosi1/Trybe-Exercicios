// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Com filter e reduce
// let somaPar = numbers.filter((par) => par % 2 === 0).reduce((acc, soma) => acc + soma);
// console.log(somaPar);

// Só o Reduce
// let somarParsemFilter = numbers.reduce((acc, soma) => (soma % 2 === 0) ? acc + soma: acc);
// console.log(somarParsemFilter);

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

let student = estudantes.map((students) => ({name: students.nome, materia: students.materias.reduce((acc, note) => (acc.nota > note.nota) ? acc: note).name}))

console.log(student);