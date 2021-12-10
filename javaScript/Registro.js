//datos del usuari
const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad")
//listado de usuarios
const listado = document.getElementById("listado");

function registrar() {
	listado.innerHTML = listado.innerHTML + "<li>"+nombre.value+"</li>"
    alert("hola "+ nombre.value);
        }