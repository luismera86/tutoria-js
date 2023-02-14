// Aplicación de sistema de registro y adopción de mascotas

alert('Bienvenido al sistema se adopción y registro de adopción de mascotas');

let mascotas = [];

function menuOpciones() {
  let opcion = parseInt(
    prompt(
      'Por favor elije una de las siguientes opciones \n1) Registrar un usuario\n2) Registrar una mascota para adopción\n3) Adoptar una mascota \n4) Salir'
    )
  );

  if (opcion === 1) {
    registroUsuario();
  } else if (opcion === 2) {
    registrarMascota();
  } else if (opcion === 3) {
    adoptarMascota();
  } else if (opcion === 4) {
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

  alert(`El usuario ${nombre} ${apellido} a sido registrado con éxito ahora lo redirigiremos al menú principal`);
  menuOpciones();
  return usuario;
}

function registrarMascota() {
  alert('Usted a seleccionado el registro de una mascota a continuación se le solicitaran los datos de las misma');
  let nombre = prompt('Ingrese nombre de la mascota');
  let tipo = prompt('Ingrese el tipo de mascota, si es gato, perro, pajaro, etc');
  let color = parseInt(prompt('Ingrese el color de la mascota'));
  let edad = parseInt(prompt('Ingrese la edad de la mascota'));

  if (edad === typeof Number) {
    alert('La edad debe ser un número sin decimales');
    edad = parseInt(prompt('Ingrese la edad de la mascota'));
  }

  // Los datos ingresados por prompt se guardan en el objeto mascota
  const mascota = {
    nombre,
    tipo,
    color,
    edad,
  };

  // Guardamos la mascota registrada en el array de mascotas
  mascotas.push(mascota);
  alert(`Felicitaciones la mascota con el nombre ${nombre} fue registrada con éxito`);

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
    //TODO hacer la lógica para que muestre una por una las mascotas y luego pregunte si quiere adoptar, en caso de que si que corte el ciclo y sino que continúe hasta que se quede sin mascota y salga un cartel de aviso que no hay más mascotas para adoptar, volver al menú de adopción
    if (opcion === 1) {
      adoptarMascota(mascota.nombre);
      //* si continúa el ciclo poner un return o un break
    } else if (mascotas.length === 0) {
      alert('No hay mascotas registradas para adoptar')
    } 
    menuAdopcion();
  });
}

function adoptarMascota(nombre) {}
