const valor = document.querySelector("#numero")
const btnMostrar = document.querySelector("#btnMostrar")
const texto = document.querySelector("#parrafoInformacion")
function ejecutar(e){
    e.preventDefault()
    let num = parseInt(valor.value)
    let tablaResultado = "";
    for (let i = 1; i <= 10; i++){
        let producto = num * i;
        tablaResultado += `${num} x ${i} = ${producto} \n`;
    }
    texto.innerText = "Tabla del " + num + ":\n" + tablaResultado;
}
btnMostrar.addEventListener("click", ejecutar)