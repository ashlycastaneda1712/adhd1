const numValor1 = document.querySelector("#numValor1");
const numValor2 = document.querySelector("#numValor2");
const btnVerificar = document.querySelector("#btnVerificar");
const divGenerarNumeros = document.querySelector("#generarNumeros");
function generarNumeros(e){
    e.preventDefault();
    let a = Math.abs(Number(numValor1.value));
    let b = Math.abs(Number(numValor2.value));
    if (a === 0 || b === 0){
        divGenerarNumeros.innerHTML= "ingresa números distintos de cero.";
        return;
    }
    let temporalA = a;
    let temporalB = b;
    while (temporalB!==0){
        let residuo = temporalA % temporalB;
        temporalA = temporalB;
        temporalB = residuo;
    }
    let mcd = temporalA;
    let resultadoMCM = (a * b) / mcd;
    divGenerarNumeros.innerHTML = `El MCM de ${a} y ${b} es: ${resultadoMCM}`;
    alert("El MCM calculado es: " + resultadoMCM);
    console.log("Resultado del MCM:", resultadoMCM);
    console.table({ Numero_A: a, Numero_B: b, Resultado: resultadoMCM });
}
btnVerificar.addEventListener("click",generarNumeros);