
// Variables de ingreso de datos

let nombreJugador = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombreJugador} al juego de adivina el número del 1 al 10`);


// Variables de juego

let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un numero aleatorio del 1 al 10 
// Para mas información de la función Math.floor: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/floor
let intentos = 0; // Inicializa el contador de intentos

while ( intentos < 3 ) { 

    intentos++; // Incrementa el contador de intentos
    
    numeroElgido = parseInt(prompt("Ingrese un numero del 1 al 10")); 
    if (numeroElgido == numeroAleatorio) { 
        alert(`Felicidades ${nombreJugador}, has ganado`); 
        break
    } else if (numeroElgido > numeroAleatorio) { 
        alert(`${nombreJugador}, no adivinaste prueba con un número mayor`); 
    } else { 
        alert(`${nombreJugador}, no adivinaste prueba con un número menor`); 
    }

    alert(`Intentos: ${intentos}`); // Muestra el contador de intentos
}
