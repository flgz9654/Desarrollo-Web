// Funcion que permite definir un numero aleatorio en un rango min y max para la variable PC:
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funcion que permite tener la eleccion del juego:
function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra 🪨";
    } else if (jugada == 2) {
        resultado = "Papel 📰";
    } else if (jugada == 3) {
        resultado = "Tijera ✂️";
    } else {
        resultado = "MAL ELEGIDO";
    }
    return resultado;
}

// Creacion de variables
let jugador = "";
let pc = "";
let triunfos = 0; 
let perdidas = 0;
let empates = 0;

// Bucle que permite repetir el ciclo del juego hasta ganar y perder 3 veces como limite
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elige: 1 para Piedra🪨, 2 para Papel📰, 3 para Tijera✂️");
    //alert("Elegiste " + jugador)

    alert("Tu Eliges: " + eleccion(jugador));
    alert("Pc Elige: " + eleccion(pc));
    
    // COMBATE
    if (pc == jugador) {
        alert("EMPATE");
        empates = empates ++
    } else if (
    (jugador == 1 && pc == 3) || 
    (jugador == 2 && pc == 1) || 
    (jugador == 3 && pc == 2)) {   

        alert("GANASTE");
        triunfos = triunfos ++ 
    } 
    else {
        alert("PERDISTE");
        perdidas = perdidas ++
    }
}
    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces." + " Y Tuviste " + empates + " Empates")

