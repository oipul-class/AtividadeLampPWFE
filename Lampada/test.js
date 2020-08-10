const Button = document.getElementById ("turnButton");
const lamp = document.getElementById("LightBulb");

//document.getElementById("nome") - pega um elemento baseado no nome da id
// funcion (nome) () {} - cria funções
// indexOf ("") - faz uma varredura procurando essa palavra

function IsOff() {
    return lamp.src.indexOf ("desligada")  > true
}

function Turn () {
    if ( !isLampBroken () ) {
        if ( !IsOff ()) {
            lamp.src = "./Images/desligada.jpg";
            console.log("Lamp is off")
            lamp.alt = "Light off"
        } else {
            lamp.src = "./Images/ligada.jpg";
            console.log("Lamp is on")
            lamp.alt = "Light on"
        }
    }
}

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") > -1 // -1 = Bool false | 1 = Bool True
                            
}


function lampBroken () {
    if ( !isLampBroken () ) {
        lamp.src = "./Images/quebrada.jpg"
        console.log("Lamp is broken")
    }
}

Button.addEventListener("click" , Turn);
lamp.addEventListener("mouseover", Turn);
lamp.addEventListener("mouseout", Turn);
lamp.addEventListener("dblclick", lampBroken);
