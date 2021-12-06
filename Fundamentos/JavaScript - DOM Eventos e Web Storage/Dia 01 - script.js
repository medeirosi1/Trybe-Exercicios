function corFundoTitle (color){
    let corFundo = document.querySelector("#header-container");
corFundo.style.backgroundColor = color;
}
corFundoTitle("MediumSeaGreen");

function corFundoEmergency (color){
    let fundoCor = document.querySelector(".emergency-tasks");
    fundoCor.style.backgroundColor = color;
}
corFundoEmergency("Salmon");

function corFundoNoEmergency (color){
    let colorFundo = document.querySelector(".no-emergency-tasks");
    colorFundo.style.backgroundColor = color;
}
corFundoNoEmergency("Khaki")

function corTextFundoEmergency (color1, color2) {
    let h3 = document.querySelectorAll("h3");
    for (let i = 0; i < h3.length; i += 1){
        if (i < 2){
            h3[i].style.backgroundColor = color1;
        } else {
            h3[i].style.backgroundColor = color2;
        }
    }
} 
corTextFundoEmergency ("purple", "black");

function footerFundo (color){
    let footer = document.querySelector("#footer-container");
    footer.style.backgroundColor = color;
}
footerFundo("green");