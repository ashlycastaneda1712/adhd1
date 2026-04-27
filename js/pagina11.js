const numValor = document.querySelector("#numValor");
const btnVerificar = document.querySelector("#btnVerificar");
const divGenerarNumeros = document.querySelector("#generarNumeros");
function generarNumeros(e){
    e.preventDefault();
    let limite = parseInt(numValor.value);
    let numeros = "";
    if (!isNaN(limite) && limite > 0) {
    for (let i = 1; i <= limite; i++) {
            numeros += i + "<br>";
        }
    }
    divGenerarNumeros.innerHTML=numeros;
}
btnVerificar.addEventListener("click",generarNumeros);