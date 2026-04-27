const input1 = document.querySelector("#n1")
const input2 = document.querySelector("#n2")
const input3 = document.querySelector("#n3")
const btnOrdenar = document.querySelector("#btnOrdenar")
const numMayor = document.querySelector("#numeroMayor") 
const numMedio = document.querySelector("#numeroMedio") 
const numMenor = document.querySelector("#numeroMenor") 
function ejecutar(e) {
    e.preventDefault()
    let n1 = parseFloat (input1.value)
    let n2 = parseFloat (input2.value)
    let n3 = parseFloat (input3.value)
    let mayor, medio, menor;
    if (n1 >= n2 && n1 >= n3) {
        mayor = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        mayor = n2;
    } else {
        mayor = n3;
    }
    if (n1 <= n2 && n1 <= n3) {
        menor = n1;
    } else if (n2 <= n1 && n2 <= n3) {
        menor = n2;
    } else {
        menor = n3;
    }
    medio = (n1 + n2 + n3) - mayor - menor;
    numMayor.value = mayor;
    numMedio.value = medio;
    numMenor.value = menor;
}
btnOrdenar.addEventListener("click", ejecutar)