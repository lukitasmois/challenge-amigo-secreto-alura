// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let MSG_NOMBRE_VACIO = "Por favor, inserte un nombre."
let MSG_NO_HAY_AMIGOS = "Por favor, agregue amigos a la lista."
let listaHtml = document.getElementById("listaAmigos")


function agregarAmigo(){
    let input = document.getElementById("amigo")
    let nombre = input.value

    if(nombre == "" || nombre == " "){
        alert(MSG_NOMBRE_VACIO)
    }

    input.value = ""
    amigos.push(nombre)

    actualizarLista(nombre)
}

function actualizarLista(nombre) {
    resultado.innerHTML = ""
    let nuevoAmigo = document.createElement("li")
    nuevoAmigo.textContent = nombre


    listaHtml.appendChild(nuevoAmigo)
}

function sortearAmigo() {
    if (amigos.length <= 0) {
        alert(MSG_NO_HAY_AMIGOS)
    }

    let posicion = Math.floor(Math.random() * amigos.length-1) + 1;

    let resultado = document.getElementById("resultado")

    resultado.innerHTML = amigos[posicion]

    amigos = []
    listaHtml.innerHTML = ""
}