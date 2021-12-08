function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function daysOfTheMonth(){
for (let i = 0; i < dezDaysList.length; i += 1){
    let dias = document.createElement('li');
    dias.className = 'day';
    dias.innerText = dezDaysList[i];
    document.querySelector('#days').appendChild(dias);

    if (dezDaysList[i] == 24 | dezDaysList[i] == 31){
    dias.className = 'day holiday'
    } else if (dezDaysList[i] == 25){
        dias.className = 'day holiday friday'
    } else if (dezDaysList[i] == 4 | dezDaysList[i] == 11 | dezDaysList[i] == 18) {
        dias.className = 'day friday'
    }
}
}
daysOfTheMonth();

// Exercicos 2:
function button (feriados) {
    let botao = document.createElement('button');
    botao.id = "btn-holiday"
    botao.innerText = feriados;
    document.querySelector(".buttons-container").appendChild(botao);
} 
button("Feriados");

// Exercicio 3:
let holiday = document.getElementById("btn-holiday");
holiday.addEventListener('click', eventButton);
 
function eventButton (){
    let cor1 = document.getElementsByClassName('holiday');
    for (let i = 0; i < cor1.length; i += 1){ 
        if (cor1[i].style.backgroundColor === 'red'){
        cor1[i].style.backgroundColor = 'rgb(238,238,238';
        cor1[i].style.color = '#777';
        } else {
        cor1[i].style.backgroundColor = 'red'
        cor1[i].style.color = 'yellow'
        }
    }
}

// Exercicio 4:
function button2 (sextou){
    let botao2 = document.createElement('button');
    botao2.className = 'btn-friday'
    botao2.innerText = sextou;
    document.querySelector('.buttons-container').appendChild(botao2);
}
button('Sexta-Feira');

// Exercicio 5:


function evento (){
    let friday1 = document.querySelectorAll('.friday');
    for (let i = 0; i < friday1.length; i +=1){
        friday1[i].innerText = "sextou";
    }
}
