const listaPalabras = document.getElementById("listaPalabras")
const resultadoContainer = document.getElementById("resultadoContainer")
const tituloResultado = document.getElementById("tituloResultado")
const cuerpoTabla = document.getElementById("cuerpoTabla")
const mostrarPrimerDigito = document.getElementById("mostrarPrimerDigito")
const mostrarUltimoDigito = document.getElementById("mostrarUltimoDigito")
const mostrarCaracteres = document.getElementById("mostrarCaracteres")

function inicializarTabla(titulo) {
    cuerpoTabla.innerHTML = ""
    tituloResultado.textContent = titulo
    resultadoContainer.style.display = "block"
}

function agregarFila(contenido) {
    const fila = document.createElement("tr")
    const celda = document.createElement("td")
    celda.textContent = contenido
    fila.appendChild(celda)
    cuerpoTabla.appendChild(fila)
}
function PrimerDigito() {
    const palabra = listaPalabras.value
    inicializarTabla("Primer dígito de: " + palabra)
    agregarFila(palabra.charAt(0))
}
function UltimoDigito() {
    const palabra = listaPalabras.value
    inicializarTabla("Último dígito de: " + palabra)
    agregarFila(palabra.charAt(palabra.length - 1))
}
function Caracteres() {
    const palabra = listaPalabras.value
    inicializarTabla("Caracteres de: " + palabra)
    for (let i = 0; i < palabra.length; i++) {
        agregarFila(palabra.charAt(i))
    }
}
mostrarPrimerDigito.addEventListener("click", PrimerDigito)
mostrarUltimoDigito.addEventListener("click", UltimoDigito)
mostrarCaracteres.addEventListener("click", Caracteres)