const cajaNumero = document.getElementById("cajaNumero");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let n = parseInt(cajaNumero.value);

    if (isNaN(n)) {
        titulo.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    let resultado = "Tabla del " + n + ":<br>";
    for (let i = 1; i <= 10; i++) {
        resultado += n + " x " + i + " = " + (n * i) + "<br>";
    }

    titulo.innerHTML = resultado;
});