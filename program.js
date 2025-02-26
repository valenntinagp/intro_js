// Obtener los elementos del DOM
let miTexto = document.getElementById("text1");
let miBoton = document.getElementById("boton1");
let resultadoDiv = document.getElementById("resultado");

// Agregar evento al botón para que ejecute la función cuando se haga clic
miBoton.addEventListener("click", function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto (enviar formulario)
    
    let palabra = miTexto.value.toLowerCase(); // Obtenemos el texto del cuadro de texto y lo convertimos a minúsculas
    let abecedario = 'abcdefghijklmnopqrstuvwxyz'; // El abecedario
    let conteoLetras = {}; // Objeto para almacenar el conteo de letras

    // Recorremos la palabra
    for (let letra of palabra) {
        if (abecedario.includes(letra)) {
            // Si la letra está en el abecedario, la contamos
            conteoLetras[letra] = conteoLetras[letra] ? conteoLetras[letra] + 1 : 1;
        }
    }

    // Construir el resultado
    let resultado = '';
    for (let letra in conteoLetras) {
        resultado += `${letra.toUpperCase()}: ${conteoLetras[letra]}<br>`;
    }

    // Si no hay letras encontradas
    if (resultado === '') {
        resultadoDiv.innerHTML = "No se encontraron letras del abecedario en la palabra.";
    } else {
        resultadoDiv.innerHTML = "Letras encontradas y su cantidad:<br>" + resultado;
    }
});

