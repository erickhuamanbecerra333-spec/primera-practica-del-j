function saludar(){
    let nombre=document.getElementById("nombre").value;
    let resultado=document.getElementById("resultado");
    resultado.textContent="Hola " + nombre;
}

let boton = document.getElementById("boton");
boton.addEventListener("click",saludar);