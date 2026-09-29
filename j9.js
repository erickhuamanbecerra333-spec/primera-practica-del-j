const cajaNumero = document.getElementById("cajaNumero");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let valor = cajaNumero.value;

    if (valor.length !== 3 || isNaN(valor)) {
        titulo.textContent = "Por favor, ingrese un número válido de 3 cifras.";
        return;
    }

    if (valor[0] === valor[2]) {
        titulo.textContent = "El número " + valor + " SÍ es capicúa.";
    } else {
        titulo.textContent = "El número " + valor + " NO es capicúa.";
    }
});