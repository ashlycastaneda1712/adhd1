const numValor1 = document.getElementById("numValor1");
const numValor2 = document.getElementById("numValor2");
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
function calcularCaracteres() {
    const palabra1 = numValor1.value;
    const palabra2 = numValor2.value;
    const total = palabra1.length + palabra2.length;
    prepararTabla("Cantidad de caracteres", "<tr><th>TEXTO</th><th>CANTIDAD</th></tr>");
    cuerpoTabla.innerHTML += `<tr><td>${palabra1}</td><td>${palabra1.length}</td></tr>`;
    cuerpoTabla.innerHTML += `<tr><td>${palabra2}</td><td>${palabra2.length}</td></tr>`;
    cuerpoTabla.innerHTML += '<tr><td>TOTAL</td><td>' + total + '</td></tr>';
}
function contarS_en_Texto(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === "s") {
            contador++;
        }
    }
    return contador;
}
function contarLetraS() {
    const palabra1 = numValor1.value;
    const palabra2 = numValor2.value;
    const conteo1 = contarS_en_Texto(palabra1);
    const conteo2 = contarS_en_Texto(palabra2);
    const totalS = conteo1 + conteo2;
    prepararTabla("Conteo de Letra 'S'", `<tr><th>TEXTO</th><th>CANTIDAD DE "S"</th></tr>`);
    cuerpoTabla.innerHTML += `<tr><td>No. 1</td><td>${conteo1}</td></tr>`;
    cuerpoTabla.innerHTML += `<tr><td>No. 2</td><td>${conteo2}</td></tr>`;
    cuerpoTabla.innerHTML += `<tr><td>TOTAL</td><td>${totalS}</td></tr>`;
}
function mostrarPares() {
    const texto = numValor1.value + numValor2.value;
    let contadorPares = 0;
    prepararTabla("Caracteres Pares", "<tr><th>Caracter par</th><th>Valor</th></tr>")
    for (let i = 1; i < texto.length; i += 2) {
        contadorPares++;
        cuerpoTabla.innerHTML += `
            <tr>
                <td>${contadorPares}</td>
                <td>${texto[i]}</td>
            </tr>`;
    }
    cuerpoTabla.innerHTML += `<tr><td>TOTAL</td><td>${contadorPares}</td></tr>`;
}
document.getElementById("btnCaracteres").addEventListener("click", calcularCaracteres);
document.getElementById("btnLetraS").addEventListener("click", contarLetraS);
document.getElementById("btnDigitosPares").addEventListener("click", mostrarPares);

