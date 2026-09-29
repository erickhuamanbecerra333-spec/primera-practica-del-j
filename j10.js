const cajaNumero = document.getElementById("cajaNumero");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let n = parseInt(cajaNumero.value);
    let divisores = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        titulo.textContent = "El número " + n + " SÍ es primo.";
    } else {
        titulo.textContent = "El número " + n + " NO es primo.";
    }
});