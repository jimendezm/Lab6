/*
1
Al hacer click en #btnClick, cambia el texto de #titulo a "Click detectado".

2
Al hacer doble click en #btnDoble, cambia el color de fondo de #caja a verde.

3
Al hacer clic derecho (contextmenu) en #btnContext, muestra un alert("Menú contextual bloqueado") y evita el menú.

4
Cuando el mouse entra en #caja (mouseover), agrega la clase .resaltado.

5
Cuando el mouse sale de #caja (mouseout), quita la clase .resaltado.

6
Cuando se presione una tecla (keydown), mostrar en consola la tecla presionada.

7
En el campo #nombre, contar caracteres en vivo con el evento input y mostrarlos en #contador.

8
En el campo #correo, al perder el foco (blur), mostrar un alert si está vacío.

9
En el formulario, al enviar (submit), prevenir el envío y mostrar un mensaje "Formulario enviado con éxito".

10
Detectar cuando la ventana cambia de tamaño (resize) y mostrar en consola el ancho actual.

*/

// app.js
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");
    const btnClick = document.getElementById("btnClick");
    const btnDoble = document.getElementById("btnDoble");
    const btnContext = document.getElementById("btnContext");
    const caja = document.getElementById("caja");
    const nombreInput = document.getElementById("nombre");
    const contador = document.getElementById("contador");
    const correoInput = document.getElementById("correo");
    const formulario = document.getElementById("formulario");

    // 1
    btnClick.addEventListener("click", () => {
        titulo.textContent = "Click detectado";
    });

    //2
    btnDoble.addEventListener("dblclick", () => {
        caja.style.backgroundColor = "green";
    });

    //3
    btnContext.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Menú contextual bloqueado");
    });

    //4
    caja.addEventListener("mouseover", () => {
        caja.classList.add("resaltado");
    });

    //5
    caja.addEventListener("mouseout", () => {
        caja.classList.remove("resaltado");
    }); 

    //6
    document.addEventListener("keydown", (e) => {
        console.log(`Tecla presionada: ${e.key}`);
    });

    //7
    nombreInput.addEventListener("input", () => {
        contador.textContent = nombreInput.value.length;
    });

    //8
    correoInput.addEventListener("blur", () => {    
        if(correoInput.value.trim() === ""){
            alert("El campo correo no puede estar vacío");
        }
    });

    //9
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulario enviado con éxito");
    });

    //10
    window.addEventListener("resize", () => {
        console.log(`Ancho actual de la ventana: ${window.innerWidth}px`);
    });

});
