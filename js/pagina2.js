const inputA = document.querySelector("#catetoA")
const inputB = document.querySelector("#catetoB")
const btnVerificar = document.querySelector("#btnVerificar");
const parrafoInformacion = document.querySelector("#parrafoInformacion")

function ejecutar(e){
    e.preventDefault();
    let valA = parseFloat(inputA.value);
    let valB = parseFloat(inputB.value);
    if (isNaN(valA)|| isNaN(valB)) {
        parrafoInformacion.innerHTML = "Respuesta: Por favor ingresa ambos catetos.";
        return;
    }
    let hipotenusa = Math.sqrt(Math.pow(valA, 2) + Math.pow(valB, 2));
    parrafoInformacion.innerHTML = "Respuesta: la hipotenusa es: " + hipotenusa.toFixed(2);
}
btnVerificar.addEventListener("click", ejecutar);