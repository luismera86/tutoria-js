let nombre = prompt('Bienvenido/a por favor ingrese su nombre');

alert(
  `Mucho gusto ${nombre} te invito a jugar un juego de adivinanza en el que tendrás que que número del 1 al 10 estoy pensando, pero te aclaro que tienes solo 3 intentos, si no adivinas en ningún intento perderás y tendrás que volver a jugar recargando la página`
);

let numeroUsuario = parseInt(prompt('Por favor ingrese un número del 1 al 10 para adivinar que número estoy pensando'));
let numero = numeroAleatorio(1, 10);
let intentos = 0;

// Lógica del juego

while (intentos !== 3) {
  intentos++;
  alert(`Vas realizando ${intentos} intentos`)
  
  if (intentos === 3 && numero !== numeroUsuario) {
       alert(
         `Lo sentimos ${nombre} no adivinaste y se te acabaron los intentos el número que estaba pensando era ${numero}, puedes volver a jugar apretando aceptar y luego la tecla F5 para recargar la página`
       );
  }
  
  if (numeroUsuario < numero && intentos !== 3) {
    alert(`Muy cerca pero el número que estoy pensando es mayor que ${numeroUsuario}`);
    numeroUsuario = parseInt(
      prompt('Por favor ingrese un número del 1 al 10 para adivinar que número estoy pensando')
      );
    } else if (numeroUsuario > numero && intentos !== 3) {
      alert(`Muy cerca pero el número que estoy pensando es menor que ${numeroUsuario}`);
      numeroUsuario = parseInt(
        prompt('Por favor ingrese un número del 1 al 10 para adivinar que número estoy pensando')
        );
      } else if (numeroUsuario === numero) {
        alert(`Felicitaciones ${nombre} adivinaste que estaba pensando el número ${numero}`);
        break
  }
      
}

// for (let i = 0; i < 3; i++) {
//   if (numeroUsuario > 1 && numeroUsuario < 10 && i <= 3) {
//     if (numeroUsuario < numero) {
//       alert(`Muy cerca pero el número que estoy pensando es mayor que ${numeroUsuario}`);
//       numeroUsuario = parseInt(
//         prompt('Por favor ingrese un número del 1 al 10 para adivinar que número estoy pensando')
//       );
//     } else if (numeroUsuario > numero) {
//       alert(`Muy cerca pero el número que estoy pensando es menor que ${numeroUsuario}`);
//       numeroUsuario = parseInt(
//         prompt('Por favor ingrese un número del 1 al 10 para adivinar que número estoy pensando')
//       );
//     } else if (numeroUsuario === numero) {
//       return alert(`Felicitaciones ${nombre} adivinaste que estaba pensando el número ${numero}`);

//     }
//   } else if (i > 3) {
//     alert(
//       `Lo sentimos ${nombre} se te acabaron los intentos, puedes volver a jugar apretando aceptar y luego la tecla F5 para recargar la página`
//     );
//   }
// }

function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
