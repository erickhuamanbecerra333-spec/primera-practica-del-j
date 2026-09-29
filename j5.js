const cajaNumero = document.getElementById("cajaNumero");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let n = parseInt(cajaNumero.value);
    
    if (isNaN(n) || n < 0) {
        titulo.textContent = "Por favor, ingrese un número válido mayor o igual a 0.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    titulo.textContent = "El factorial es: " + factorial;
});