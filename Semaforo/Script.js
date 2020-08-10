const buttons = document.getElementById("Buttons")
const Semaforo = document.getElementById("SemaforoImg");
let colorIndex = 0;
let automaticColorChange = null;

const trafficLight = ( event ) => {
    stopAuto();
    //event.terget.id = pega o valor da id daquele tag no html
    turnOn[event.target.id](); 
}

const nextColorIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const stopAuto = () => {
    clearInterval( automaticColorChange );
}

const changeColor = () => {
    const colors = ["red" , "yellow", "green"];
    const color = colors[colorIndex];
    turnOn[color]();
    nextColorIndex();
}

//objeto com varias funções
const turnOn = {
    "red": () => Semaforo.src = "Images/vermelho.png",
    "yellow": () => Semaforo.src = "Images/amarelo.png",
    "green": () => Semaforo.src = "Images/verde.png",
    "auto": () => automaticColorChange = setInterval( changeColor, 500 )
}



buttons.addEventListener ("click" , trafficLight )