const numValor1 = document.querySelector("#numValor1");
const numValor2 = document.querySelector("#numValor2");
const btnVerificar = document.querySelector("#btnVerificar");
const divGenerarNumeros = document.querySelector("#generarNumeros");
function generarNumeros(e){
    e.preventDefault();
    let inicio = Number(numValor1.value);
    let fin = Number(numValor2.value);
    let menor = Math.min(inicio, fin);
    let mayor = Math.max(inicio, fin);
    let numeros = "Números pares encontrados:";
    for (let index = menor; index <= mayor; index++) {
        let residuo = index % 2;
        if (residuo === 0) {
            numeros += "<br>" + index;
        }
    }
    divGenerarNumeros.innerHTML=numeros;
}
btnVerificar.addEventListener("click",generarNumeros);