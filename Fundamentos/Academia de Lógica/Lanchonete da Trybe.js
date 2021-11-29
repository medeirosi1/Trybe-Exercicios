let lanches = ["1 - Trybe Lanche Feliz", "2 - McTrybe", "3 - TrybeWooper", "4 - X-Trybe", "5 - Triplo Trybe com JS"];

const number = 4;
optionsMenu(number);
function optionsMenu(number){
    
    switch (number) {
        case 1:
            console.log(lanches[number-1]);
            break;
        case 2:
            console.log(lanches[number-1]);
            break;
        case 3:
            console.log(lanches[number-1]);
            break;
        case 4:
            console.log(lanches[number-1]);
            break;
        case 5:
            console.log(lanches[number-1]);
            break;
        default:
            console.log("Não temos esta opção ainda:(");
    }
  }

  module.exports = optionsMenu;