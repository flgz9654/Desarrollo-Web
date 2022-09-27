const sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
const sectionReiniciar = document.getElementById ("Reiniciar")
const botonMascotaJugador = document.getElementById ("boton-mascota")
const botonFuego = document.getElementById ("boton-fuego") 
const botonAgua = document.getElementById ("boton-agua")
const botonTierra = document.getElementById ("boton-tierra")
const botonReiniciar = document.getElementById ("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById ("seleccionar-mascota")
const spanMascotaJugador = document.getElementById ("mascota-jugador")
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensajes = document.getElementById ("resultado")
const ataquesdelJugador = document.getElementById ("ataques-del-Jugador")
const ataquesdelEnemigo = document.getElementById ("ataques-del-Enemigo")
const contenedorTarjetas = document.getElementById ("contenedorTarjetas")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)
let langostelvis = new Mokepon("Langostelvis", "./assets/mokepons_mokepon_langostelvis_attack.png", 5)

hipodoge.ataques.push(
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🏔️", id: "boton-tierra" },
)

capipepo.ataques.push(
    { nombre: "🏔️", id: "boton-tierra" },
    { nombre: "🏔️", id: "boton-tierra" },
    { nombre: "🏔️", id: "boton-tierra" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🔥", id: "boton-fuego" },
)

ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🏔️", id: "boton-tierra" },
)

langostelvis.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🏔️", id: "boton-tierra" },
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis)

// Función que permite escuchar lo que ocurre con el boton seleccionar mascota
function iniciarJuego() {   
    sectionSeleccionarAtaque.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = /*html*/`
        <input type= "radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img 
            src=${mokepon.foto} 
            alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById ("Hipodoge")
    inputCapipepo = document.getElementById ("Capipepo")
    inputRatigueya = document.getElementById ("Ratigueya")
    inputLangostelvis = document.getElementById ("Langostelvis")
    }) 

    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener ("click", reiniciarJuego)
}

// Función que permite la selección de las mascotas del jugador
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    }else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
    } else {
        alert("Debes seleccionar una Mascota")
    }

    seleccionarMascotaEnemigo()
}

// Funcion que permite la seleccion de las mascotas del enemigo
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = mascotaaleatoria(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre   
}

// Funciones de los ataques del Jugador
function ataqueFuego() {
    ataqueJugador = "FUEGO!🔥"
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "AGUA!💧"
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA!🏔️"
    ataqueAleatorioEnemigo()
}

// Funciones de los ataques del Enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = ataquealeatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO!🔥"        
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA!💧"
    } else {
        ataqueEnemigo = "TIERRA!🏔️" 
    }
    combate()
}

function combate() {

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empataste 😶‍🌫️")
    } else if (ataqueJugador == "FUEGO!🔥" && ataqueEnemigo == "TIERRA!🏔️") {
        crearMensaje("Ganaste 🤩")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA!💧" && ataqueEnemigo == "FUEGO!🔥") {
        crearMensaje("Ganaste 🤩")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA!🏔️" && ataqueEnemigo == "AGUA!💧") {
        crearMensaje("Ganaste 🤩")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste 😥")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador 
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("*** 🎉 FELICITACIONES GANASTE LA PARTIDA 🎉 ***")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("*** 😮 PERDISTE LA PARTIDA 😮 ***")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("h3")
    let nuevoAtaqueDelEnemigo = document.createElement("h3")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    ataquesdelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesdelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

// Función mascota aleatoria del enemigo
function mascotaaleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Función ataque aleatorio del enemigo
function ataquealeatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)