// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function ancora(e){
    e.preventDefault();
}
HREF_LINK.addEventListener('click', ancora);

function check(e){
    e.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', check);

function text(e){
   let tecla = e.key
   if (tecla !== 'a'){
        e.preventDefault();
   }
}
INPUT_TEXT.addEventListener('keypress', text);