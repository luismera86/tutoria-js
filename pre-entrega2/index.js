// Aplicación de sistema de registro y adopción de mascotas

alert('Bienvenido al sistema se adopción y registro de adopción de mascotas');

let mascotas = [];

function menuOpciones() {
  let opcion = parseInt(
    prompt(
      'Por favor elije una de las siguientes opciones \n1) Registrar una mascota para adopción\n2) Adoptar una mascota \n3) Salir'
    )
  );

  if (opcion === 1) {
    registrarMascota();
  } else if (opcion === 2) {
    menuAdopcion();
  } else if (opcion === 3) {
    alert('Gracias vuelva pronto');
    return;
  } else {
    alert('Por favor ingrese las opciones 1, 2, 3 o 4');
    menuOpciones();
  }
}

menuOpciones();

// Registramos un usuario nuevo
function registroUsuario() {
  let nombre = prompt('Ingrese su nombre');
  let apellido = prompt('Ingrese su apellido');
  let telefono = parseInt(prompt('Ingrese su número de teléfono'));

  // Los datos ingresados por prompt se guardan en el objeto usuario
  const usuario = {
    nombre,
    apellido,
    telefono,
  };

  alert(`El usuario ${nombre} ${apellido} a sido registrado con éxito`);

  return usuario;
}

function registrarMascota() {
  alert('Usted a seleccionado el registro de una mascota a continuación se le solicitaran los datos de las misma');
  let nombre = prompt('Ingrese nombre de la mascota');
  let tipo = prompt('Ingrese el tipo de mascota, si es gato, perro, pajaro, etc').toLocaleLowerCase();
  let color = prompt('Ingrese el color de la mascota');
  let edad = parseInt(prompt('Ingrese la edad de la mascota'));
  
  // Verificar si edad ingresada no es un número, lo solicita hasta que el usuario ingrese un número
  while (isNaN(edad)) {
    alert('La edad debe ser un número sin decimales');
    edad = parseInt(prompt('Ingrese la edad de la mascota'));
  }

  // Los datos ingresados por prompt se guardan en el objeto mascota
  const mascota = {
    nombre,
    tipo,
    edad,
    color,
  };

  alert(`Felicitaciones la mascota con el nombre ${nombre} fue registrada con éxito edad ${mascota.edad}`);
  
  // Guardamos la mascota registrada en el array de mascotas
  mascotas.push(mascota);

  opcionesRegistroMascotas();
}


// Está función ejecuta un menú de opciones para el registro de mascotas si desea o no registrar una mascota nueva
function opcionesRegistroMascotas() {
  let opcion = parseInt(prompt('¿Desea registrar otra mascota? \n1) Si \n2)No'));

  if (opcion === 1) {
    registrarMascota();
  } else if (opcion === 2) {
    alert('Sera redirigido al menú principal');
    menuOpciones();
  } else {
    alert('Elija entre las opciones 1 y 2');
    opcionesRegistroMascotas();
  }
}

// Esta función ejecuta un menú de opciones de adopción y determina que hacer de acuerdo a lo que el usuario decida
function menuAdopcion() {
  alert('Usted a seleccionado adoptar una mascota');
  let opcion = parseInt(
    prompt(
      '¿Que desea hacer? \n1) Mostrar el listado de mascotas registradas y elegir cual quiere adoptar \n2) Buscar una mascotas por tipo \n3) Volver al menú anterior'
    )
  );

  if (opcion === 1) {
    if (mascotas.length > 0) {
      mostrarMascotas();
    } else {
      alert('No hay ninguna mascota registrada');
      menuAdopcion();
    }
  } else if (opcion === 2) {
    buscarMascotasPorTipo();
  } else if (opcion === 3) {
    menuOpciones();
  }
}

function mostrarMascotas() {
  mascotas.forEach((mascota) => {
    alert(`
    Nombre: ${mascota.nombre}\n
    Edad: ${mascota.edad}\n
    Tipo: ${mascota.tipo}\n
    Color: ${mascota.color}      
    `);

    let opcion = parseInt(prompt(`¿Desea adoptar la mascota ${mascota.nombre}? \n1) Si \n2) No y Continuar viendo`));

    if (opcion === 1) {
      return adoptarMascota(mascota.nombre);
    } else if (mascotas.length === 0) {
      alert('No hay mascotas registradas para adoptar');
      menuAdopcion();
    }
  });
  menuAdopcion();
}

function adoptarMascota(nombre) {
  let usuarioAdoptante = registroUsuario();
  alert(`Felicitaciones ${usuarioAdoptante.nombre} adoptaste a ${nombre}`);

  // Eliminar mascota registrada
  mascotas = mascotas.filter((mascota) => mascota.nombre !== nombre);
}

// Esta función busca las mascotas por el tipo ingresado por el usuario
function buscarMascotasPorTipo() {
  let tipo = prompt('Ingrese el tipo de mascota que desea buscar').toLocaleLowerCase();
  let chequearTipo = mascotas.find(mascota => mascota.tipo === tipo)
  
  if (!chequearTipo) {
    alert(`El tipo de mascota ${tipo} no se encuentra registrado en nuestra base de datos`)
  }
  const mascotasFiltradas = mascotas.filter((mascota) => mascota.tipo === tipo);
  mascotasFiltradas.forEach((mascota) => {
    alert(`Nombre: ${mascota.nombre} \nTipo: ${mascota.tipo} \nEdad: ${mascota.edad} \Color: ${mascota.color}`);
    let opcion = parseInt(prompt(`¿Desea adoptar la mascota ${mascota.nombre}? \n1) Si \n2) No y Continuar viendo`));
    if (opcion === 1) {
      return adoptarMascota(mascota.nombre);
    } else if (mascotas.length === 0) {
      alert('No hay mascotas registradas para adoptar');
      menuAdopcion();
    }
  });

  menuAdopcion();
}
