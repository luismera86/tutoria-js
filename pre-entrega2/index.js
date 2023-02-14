// Aplicación de sistema de registro y adopción de mascotas

alert('Bienvenido al sistema se adopción y registro de adopción de mascotas');

let usuarios = [];
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
    alert('Gracias vuelva pronto')
    return;
  } else {
    alert('Por favor ingrese las opciones 1, 2, 3 o 4');
    menuOpciones()
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

  // Guardamos el usuario en el array de usuarios
  usuarios.push(usuario);
  alert(`El usuario ${nombre} ${apellido} a sido registrado con éxito ahora lo redirigiremos al menú principal`)
  menuOpciones()
  return usuario;
}


function registrarMascota() {
  alert('Usted a seleccionado el registro de una mascota a continuación se le solicitaran los datos de las misma');
  let nombre = prompt('Ingrese nombre de la mascota');
  let tipo = prompt('Ingrese el tipo de mascota, si es gato, perro, pajaro, etc');
  let color = parseInt(prompt('Ingrese el color de la mascota'));
  let edad = parseInt(prompt('Ingrese la edad de la mascota'));

  if (edad === typeof Number) {
    alert('La edad debe ser un número sin decimales')
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
  let opcion = parseInt(prompt('¿Desea registrar otra mascota? \n1) Si \n2)No'))

  if (opcion === 1) {
    registrarMascota()
  } else if (opcion === 2) {
    alert('Sera redirigido al menú principal')
    menuOpciones();
  } else {
    //! Arreglar esto colocar un ciclo
    alert('Elija entre las opciones 1 y 2')
    opcion = parseInt(prompt('¿Desea registrar otra mascota? \n1) Si \n2)No'))
  }
}

function menuAdopcion() {
  alert('Usted a seleccionado adoptar una mascota')
  let opcion = parseInt(prompt('¿Que desea hacer? \n1) Mostrar el listado de mascotas registradas'))
}

function adoptarMascota() {}
