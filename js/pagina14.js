const numValor = document.getElementById("numValor");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const tituloResultado = document.getElementById("tituloResultado");
const resultadoContainer = document.getElementById("resultadoContainer");
const cabeceraTabla = document.getElementById("cabeceraTabla");

function prepararTabla(titulo, encabezadoHTML) {
    cuerpoTabla.innerHTML = "";
    cabeceraTabla.innerHTML = encabezadoHTML;
    tituloResultado.innerHTML = titulo;
    resultadoContainer.style.display = "block";
}
function contarVocales() {
    const texto = numValor.value.toLowerCase();
    const conteo = {
        "a": 0,
        "e": 0,
        "i": 0,
        "o": 0,
        "u": 0
    };
    let totalGeneral = 0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
            totalGeneral++;
        }
    }
    prepararTabla("Cantidad de vocales", "<tr><th>VOCAL</th><th>CANTIDAD</th></tr>")
    const vocales = ["a", "e", "i", "o", "u"];
    vocales.forEach(v => {
        cuerpoTabla.innerHTML += `
            <tr>
                <td>${v.toUpperCase()}, ${v}</td>
                <td>${conteo[v]}</td>
            </tr>`;
    });
    cuerpoTabla.innerHTML += `
    <tr>
        <td>TOTAL</td>
        <td>${totalGeneral}</td>
    </tr>`;
}

document.getElementById("btnVocales").addEventListener("click", contarVocales);