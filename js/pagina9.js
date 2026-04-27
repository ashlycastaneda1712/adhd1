const btnGenerar = document.querySelector("#btnGenerar")
const txtTexto = document.querySelector("#txtTexto")
const generartexto = document.querySelector("#generartexto")
function ejecutar(e) {
    e.preventDefault();
    let miTexto = txtTexto.value;
    let resultado = "";
    for (let i = 0; i < miTexto.length; i += 2) {
        let par = miTexto.slice(i, i + 2);
        resultado += par + "<br>"; 
    }
    generartexto.innerHTML = resultado;
}
btnGenerar.addEventListener("click", ejecutar)