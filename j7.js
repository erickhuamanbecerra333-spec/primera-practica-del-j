const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let n1 = parseFloat(nota1.value);
    let n2 = parseFloat(nota2.value);
    let n3 = parseFloat(nota3.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        titulo.textContent = "Por favor, ingrese las 3 notas correctamente.";
        return;
    }

    let promedio = (n1 + n2 + n3) / 3;
    let estado = "";

    if (promedio >= 10.5) {
        estado = "Aprobado";
    } else {
        estado = "Desaprobado";
    }

    titulo.textContent = "Promedio: " + promedio.toFixed(2) + " - " + estado;
});