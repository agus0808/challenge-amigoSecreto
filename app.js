// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializo la lista de nombres de amigos
let nombres = [];
console.log(nombres)
// Recupero la lista de resultado del DOM
let resultado = document.getElementById("resultado")

function agregarAmigo() {
    // Recupero el nombre ingresado por el usuario
    let input = document.getElementById("amigo")
    let nombre = input.value
    // Verifico que no sea vacio
    if (nombre == "") {
        alert("Debe ingresar un nombre")
    } else {
    //Si no es vacío, lo agrego al arreglo de nombres, limpio la caja para ingresar nombres y actualizo la lista
    nombres.push(nombre);
    input.value = "";
    actualizarAmigos();
}
}

function actualizarAmigos() {
    // Recupero la lista del documento
    let listaAmigos = document.getElementById("listaAmigos");
    // La limpio
    listaAmigos.innerHTML = "";
    // Recorro el arreglo de nombres y por cada nombre creo un elemento de lista que agrego a la lista ul del DOM
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        listaAmigos.appendChild(li)
    }
}

function sortearAmigo() {
    // Genero un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*(nombres.length))
    if (nombres.length == 0) {
        alert("No hay amigos para sortear!")
    } else {
        // Si hay nombres en la lista, entonces el ganador es aquel cuyo índice coindice con el indice aleatorio generado
        let nombreSeleccionado = nombres[indiceAleatorio]
        // Cambio a través de innerHTML el valor de la lista de resultado del DOM
        resultado.innerHTML = "El amigo seleccionado en el sorteo fue: " + nombreSeleccionado;        
        } 
    }


