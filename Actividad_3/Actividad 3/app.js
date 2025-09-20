// app.js
/*
Al hacer clic en Agregar al final, crear un <li> con el texto del input y añadirlo al final de la lista 
Al hacer clic en Agregar al inicio, agregar un <li> al inicio de la lista 
Cada <li> debe tener un botón ❌ que elimine esa tarea con
Si el input está vacío, no se agrega nada.
Cada <li> debe incluir también un botón ✔ que marque/desmarque la tarea como completada (classList.toggle("completado")).
Al añadir una tarea, si contiene la palabra “importante”, agregarle la clase .prioridad.
Mostrar en consola cuántas tareas hay en la lista cada vez que se agregue o elimine una.
Al hacer clic en Vaciar lista, eliminar todos los <li> de una vez.
Asignar un data-id único a cada <li> usando un contador en JS.
*/



document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nuevaTarea");
    const lista = document.getElementById("lista");
    const btnFinal = document.getElementById("btnFinal");
    const btnInicio = document.getElementById("btnInicio");
    const btnVaciar = document.getElementById("btnVaciar");

    let contador = 1; // para asignar data-id único

    // Función para crear una tarea
    function crearTarea(texto, alInicio = false) {
        if (texto.trim() === "") return;

        // 1) Crear <li>
        const li = document.createElement("li");
        li.textContent = texto;
        li.setAttribute("data-id", contador++);

        // 2) Si contiene "importante", darle clase .prioridad
        if (texto.toLowerCase().includes("importante")) {
            li.classList.add("prioridad");
        }

        // 3) Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.addEventListener("click", () => {
            li.remove();
            contarTareas();
        });

        // 4) Botón completar
        const btnCompletar = document.createElement("button");
        btnCompletar.textContent = "✔";
        btnCompletar.addEventListener("click", () => {
            li.classList.toggle("completado");
        });

        // 5) Click en el texto muestra alert con data-id + texto
        li.addEventListener("click", (e) => {
            if (e.target === li) { // evitar que el click en botones dispare el alert
                alert(`Tarea ID: ${li.getAttribute("data-id")}\nTexto: ${li.textContent}`);
            }
        });

        // 6) Insertar botones en el li
        li.appendChild(btnCompletar);
        li.appendChild(btnEliminar);

        // 7) Insertar en lista (final o inicio)
        if (alInicio) {
            lista.insertBefore(li, lista.firstChild);
        } else {
            lista.appendChild(li);
        }

        // 8) Limpiar input
        input.value = "";

        // 9) Mostrar cuántas tareas hay
        contarTareas();
    }

    // Función para vaciar tareas tareas
    function vaciarTareas() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        contarTareas();
    }

    // Función para contar tareas
    function contarTareas() {
        console.log(`Tareas en la lista: ${lista.children.length}`);
    }


    // Botón agregar al final
    btnFinal.addEventListener("click", () => {

        crearTarea(input.value, false);
    });

    // Botón agregar al inicio
    btnInicio.addEventListener("click", () => {
        crearTarea(input.value, true);
    });

    // Botón vaciar lista
    btnVaciar.addEventListener("click", () => {
        vaciarTareas();
    });


});
