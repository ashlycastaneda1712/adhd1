const btnGenerar = document.querySelector("#btnGenerar");
const txtTexto = document.querySelector("#txtTexto");
const txtPalabra = document.querySelector("#txtPalabra")
const generartexto = document.querySelector("#generartexto")
let miTexto = "";
function contarPalabras(e){
    e.preventDefault();
    miTexto = txtTexto.value;
    let PalabraBuscar = txtPalabra.value;
    let letras = ""
    let contar = 0;
    for (let i = 0; i < miTexto.length; i++) {
        letras=miTexto.slice(i,i+PalabraBuscar.length)
        if(letras == PalabraBuscar){
            contar++;
        }
    }
    generartexto.innerHTML = "aparece: " + contar + " veces."
}

btnGenerar.addEventListener("click", contarPalabras);