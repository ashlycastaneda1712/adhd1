const btnPromedio = document.querySelector("#btnPromedio");
const parrafoInformacion = document.querySelector("#parrafoInformacion");
function ejecutar(e){
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let curso = document.querySelector("#curso").value;
    let nota1 = parseFloat(document.querySelector("#n1").value) || 0;
    let nota2 = parseFloat(document.querySelector("#n2").value) || 0;
    let nota3 = parseFloat(document.querySelector("#n3").value) || 0;
    let nota4 = parseFloat(document.querySelector("#n4").value) || 0;
    let nota5 = parseFloat(document.querySelector("#n5").value) || 0;
    let suma = nota1 + nota2 + nota3 + nota4 + nota5;
    let promedio = suma / 5;
    parrafoInformacion.innerHTML = "Promedio final: " + promedio.toFixed(2);
    alert("Hola " + nombre + ", del cuso: " + curso + ", obtuviste un promedio de: " + promedio);
}
btnPromedio.addEventListener("click", ejecutar);