let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();


    if (nombre === "") {
        alert("Por favor inserte un nombre");
        return;
    }


    amigos.push(nombre);


    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);


    input.value = "";
}
function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos para sortear, por favor añade al menos uno.");
        return;
    }

    // Escoger un índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
