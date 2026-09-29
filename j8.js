const cajaRadio = document.getElementById("cajaRadio");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let radio = parseFloat(cajaRadio.value);
    
    let area = Math.PI * radio * radio;

    titulo.textContent = "El área es: " + area;
});