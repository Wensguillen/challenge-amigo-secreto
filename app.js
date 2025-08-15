//====================================================
// // Este array se usará para almacenar los nombres de los amigos que el usuario añade.
let listaDeAmigos = []; 

// =================================================== 
// Aquí obtenemos referencias a los elementos HTML que vamos a usar en nuestro código.
const campoDeEntradaNombre = document.getElementById('campo-nombre');
const botonParaAñadir = document.getElementById('boton-añadir');
const listaDondeSeMuestranAmigos = document.getElementById('lista-nombres'); 
const seccionContenedoraDeLista = document.getElementById('lista-participantes'); 
const botonParaSortear = document.getElementById('boton-sortear');
const seccionParaEntradaDeNombres = document.getElementById('seccion-entrada');  
const seccionParaMostrarGanador = document.getElementById('seccion-ganador'); 
const elementoParaNombreGanador = document.getElementById('nombre-ganador'); 
const botonParaReiniciarJuego = document.getElementById('boton-reiniciar');

// ===================================================
// Implementar la función para añadir amigos
function añadirAmigo() {

    const nombreIngresado = campoDeEntradaNombre.value.trim();

    if (nombreIngresado !== '') { 
    
        listaDeAmigos.push(nombreIngresado);

        campoDeEntradaNombre.value = '';

        
        actualizarListaDeAmigos();
    }
}

// ======================================================
//  Implementar una función para actualizar la lista de amigos 
function actualizarListaDeAmigos() {
    
    listaDondeSeMuestranAmigos.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigoActual = listaDeAmigos[i]; 

        const elementoDeLista = document.createElement('li');
        
        elementoDeLista.textContent = amigoActual;
        
        listaDondeSeMuestranAmigos.appendChild(elementoDeLista);
    }

    // Condicional para mostrar/ocultar la sección de la lista y el botón de sortear
    if (listaDeAmigos.length > 0) { // Si hay al menos un amigo en la lista...
        seccionContenedoraDeLista.classList.remove('hidden'); // ...quitamos la clase 'hidden' para mostrarlo.
        botonParaSortear.classList.remove('hidden'); // ...y mostramos el botón de sortear.
    } else { // Si la lista de amigos está vacía...
        seccionContenedoraDeLista.classList.add('hidden'); // ...añadimos la clase 'hidden' para ocultarlo.
        botonParaSortear.classList.add('hidden'); // ...y ocultamos el botón de sortear.
    }
}

// ===================================================
// Implementar una función para el sorteo de amigos
function realizarSorteo() {
    if (listaDeAmigos.length > 0) {

    
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

        const amigoSorteado = listaDeAmigos[indiceAleatorio];
        seccionParaEntradaDeNombres.classList.add('hidden');
        seccionContenedoraDeLista.classList.add('hidden');
        botonParaSortear.classList.add('hidden');
        seccionParaMostrarGanador.classList.remove('hidden'); 

        
        elementoParaNombreGanador.innerHTML = `${amigoSorteado} 🎉`; 
    } else {
        
        alert('¡Necesitas añadir amigos a la lista antes de poder sortear!');
    }
}

// ===================================================
// Implementar una función para reiniciar el juego  
function reiniciarJuego() {
    listaDeAmigos = []; 
    campoDeEntradaNombre.value = ''; 
    actualizarListaDeAmigos(); 

    // Ocultamos la sección del ganador y volvemos a mostrar la sección para añadir nombres.
    seccionParaMostrarGanador.classList.add('hidden');
    seccionParaEntradaDeNombres.classList.remove('hidden');
}
// ===================================================
// Aquí conectamos las acciones del usuario (clics, teclas) con nuestras funciones.
botonParaAñadir.addEventListener('click', añadirAmigo);
campoDeEntradaNombre.addEventListener('keypress', (evento) => {
    
    if (evento.key === 'Enter') {
        añadirAmigo(); 
    }
});

botonParaSortear.addEventListener('click', realizarSorteo);
botonParaReiniciarJuego.addEventListener('click', reiniciarJuego);

// =======================================================
// Ejecución Inicial (cuando la página se carga) 
// Esto asegura que la función `actualizarListaDeAmigos` se ejecute
// una vez que la página HTML esté completamente cargada,
// para que la lista se muestre correctamente al principio (vacía).
document.addEventListener('DOMContentLoaded', actualizarListaDeAmigos);
//PRUEBA FINAL DE CAMBIOS
