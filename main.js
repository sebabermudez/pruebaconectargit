let apellidos = [];

function agregarPersona() {
    let cedula = document.getElementsByName("cedula")[0].value;
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellido = document.getElementsByName("apellido")[0].value;
    let persona = {cedula: cedula, nombre: nombre, apellido: apellido};
    apellidos.push(apellido);
    apellidos.sort();
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (let i = 0; i < apellidos.length; i++) {
        let apellido = apellidos[i];
        lista.innerHTML += "<li>" + apellido + "</li>";
    }
}

window.onload = function() {
    let formulario = document.getElementsByTagName("form")[0];
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        agregarPersona();
    });
}