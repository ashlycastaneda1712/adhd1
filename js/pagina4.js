const inputNumero = document.querySelector("#numero")
const btnVerificar = document.querySelector("#btnVerificar")
const parrafoInformacion = document.querySelector("#parrafoInformacion")
function ejecutar(e) {
    e.preventDefault();
    let valor = parseFloat(inputNumero.value);
    if (isNaN(valor)) {
        parrafoInformacion.innerHTML = "Respuesta: Ingresa un número válido";
        return; 
    }
    if (valor > 0) {
        parrafoInformacion.innerHTML = "El número es Positivo"
    }
    else if (valor < 0) {
        parrafoInformacion.innerHTML = "El número es Negativo"
    }
    else{
        parrafoInformacion.innerHTML = "El número es Neutro"
    }
}
    btnVerificar.addEventListener("click", ejecutar);