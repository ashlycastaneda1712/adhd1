const carnet = document.querySelector("#numCarnet");
const nombre = document.querySelector("#txtNombre");
const btnVerificar = document.querySelector("#btnVerificar")
const parrafoInformacion = document.querySelector("#parrafoInformacion")

function verificarDatos(e){
    e.preventDefault();
    let datos = "carnet: " + carnet.value + " Nombre: " + nombre.value;
    parrafoInformacion.innerHTML = datos;
    alert("hola " + datos);
    console.log(datos);
}

btnVerificar.addEventListener("click",verificarDatos);