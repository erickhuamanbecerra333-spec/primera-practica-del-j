const cajaDia = document.getElementById("cajaDia");
const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    let dia = cajaDia.value;
    let nombreDia;

    switch (dia) {
        case "1":
            nombreDia = "Lunes";
            break;
        case "2":
            nombreDia = "Martes";
            break;
        case "3":
            nombreDia = "Miércoles";
            break;
        case "4":
            nombreDia = "Jueves";
            break;
        case "5":
            nombreDia = "Viernes";
            break;
        case "6":
            nombreDia = "Sábado";
            break;
        case "7":
            nombreDia = "Domingo";
            break;
        default:
            nombreDia = "Número no válido (ingrese del 1 al 7)";
    }

    titulo.textContent = nombreDia;
});