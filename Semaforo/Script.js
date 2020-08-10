const RedBTN = document.getElementById("Red");
const YellowBTN = document.getElementById("Yellow");
const GreenBTN = document.getElementById("Green");
const AutoBTN = document.getElementById("Auto");
const TrafficLight = document.getElementById("SemaforoImg");
var signalrepeater;

function changeToRed () {
    TrafficLight.src = "Images/vermelho.png";
    TrafficLight.alt = "Semáforo no vermelho";
    console.log("Light red");
}

function changeToYellow () {
    TrafficLight.src = "Images/amarelo.png";
    TrafficLight.alt = "Semáforo no amarelo";
    console.log("Light yellow");
}

function Repeat() {
    RepeatStop();
    signalrepeater = setInterval(Sequence, 2000);
    console.log("repeat activated")
}

function changeToGreen () {
    TrafficLight.src = "Images/verde.png";
    TrafficLight.alt = "Semáforo no verde";
    console.log("Light green");
}

function RepeatStop () {
    clearInterval(signalrepeater);
    console.log("Signal Repeater stopped");
}

function Sequence () {
    setTimeout(changeToRed, 500);
    setTimeout(changeToYellow, 1000);
    setTimeout(changeToGreen, 1500);
}


RedBTN.addEventListener("click" , () =>{
    RepeatStop();
    changeToRed();
    changeToRed();
});
YellowBTN.addEventListener("click" , () =>{
    RepeatStop();
    changeToYellow();
    changeToYellow();
});
GreenBTN.addEventListener("click" , () =>{
    RepeatStop();
    changeToGreen();
    
});
AutoBTN.addEventListener("click", Repeat );

