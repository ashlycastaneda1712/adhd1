const btnGenerar = document.getElementById("btnGenerar");
const generarTabla = document.getElementById("generarTabla");
const inputFilas = document.getElementById("inputFilas");
const inputColumnas = document.getElementById("inputColumnas");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const cabeceraTabla = document.getElementById("cabeceraTabla");
const tituloResultado = document.getElementById("tituloResultado");
const resultadoContainer = document.getElementById("resultadoContainer");

function crearTabla(e) {
    e.preventDefault();
    const filas = parseInt(inputFilas.value);
    const columnas = parseInt(inputColumnas.value);
    cuerpoTabla.innerHTML = "";
    cabeceraTabla.innerHTML = "";
    tituloResultado.innerHTML = `Tabla de ${filas} x ${columnas}`;
    for (let i = 1; i <= filas; i++) {
        let filaHTML = "<tr>";
        for (let j = 1; j <= columnas; j++) {
            filaHTML += "<td>";
        }
        filaHTML += "</tr>";
        cuerpoTabla.innerHTML += filaHTML;
    }
    resultadoContainer.style.display = "block";
}

btnGenerar.addEventListener("click", crearTabla);
