const btnContinuos = document.querySelector("#btnContinuos");
const valor1 = document.querySelector("#txtValor1");
const valor2 = document.querySelector("#txtValor2");
const incremento = document.querySelector("#txtIncremento")
function llamarFunciones(){
    e.preventDefault();
    generarContinuos();
    numerosDescendentes();
}
function generarContinuos(){
    e.preventDefault();
    for (let i = -10; i <= 5; i++){
        console.log (i);
    }
}
function numerosDescendentes(){
    console.log("Números descendentes")
    for (let i = 25; i >=5; i--){
        console.log(i);
    }
}
function incremento2(){
    console.log("ciclo for con incremento de 2");
    for(let j= 578; j <= 600; j+=2){
        console.log(j);
    }
}
function decremento8(){
    console.log("Decremento de 8");
    for (let index = 1000; index >=600 ; index-=8) {
        console.log(index);
    }
}
function generarNumeros(e){
    e.preventDefault();
    for (let i=Number(valor1.value); i<=Number(valor2.value); i+=Number(incremento.value)){
        console.log(i);
    }
}
btnContinuos.addEventListener("click",generarNumeros);