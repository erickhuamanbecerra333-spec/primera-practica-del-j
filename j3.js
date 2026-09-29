function sumar(a,b){
    return a+b;
}
function sumarNumeros(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado= sumar(numero1,numero2);
    document.getElementById("resultado").textContent=resultado;
    alert(resultado);
    console.log("la suma es: ",resultado);
}
0