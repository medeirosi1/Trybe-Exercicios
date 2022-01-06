const checkin = document.querySelector('.inputCheckin');  
const checkout = document.querySelector('.inputCheckout'); 
const bedroom = document.querySelectorAll('.bedroom'); 
const select = document.querySelector('.nPessoas'); 
const textArea = document.querySelector('.obs'); 
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto(){
  for (let i = 0; i <bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas(){
  return select.options[select.selectedIndex].value;
}

function getData(value){
  data = new Date(value)
  dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
  return dataFormatada;
}

function criandoLi(){
  const li = document.createElement('li');
  li.className = "teste"
  li.innerHTML = "Reserva para o dia " + getData(checkin.value) + " até o dia " + getData(checkout.value) + " Quarto " + getQuarto(bedroom) + " - Para " + getPessoas(select) + " Pessoas - " + "Obs: " + textArea.value
  ol.appendChild(li);
}

btnSubmit.addEventListener('click',criandoLi) 

function limparLista(e){
  let li2 = document.querySelectorAll('.teste');
  for(let i = 0; i < li2.length; i += 1){
    ol.removeChild(li2[i])
  }
}

btnClear.addEventListener('click',limparLista);
