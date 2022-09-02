// Comienzo de la aplicación

alert('Bienvenidos al sistema de registro de adopción de Mascotas')

// Iniciamos con un array vacío de mascotas
let listaMascotas = []

// Lógica de la función de registro

const registrarMascota = () => {
    // Variables de ingreso

    let nombreMascota = prompt('Nombre de la mascota')
    let edadMascota = Number(prompt('Edad de la mascota \n Si es menor a 1 año ingrese 1'))
    let tipoMascota = Number(prompt('Ingrese \n 1 Gato \n 2 Perro'))

    // Creamos un objeto donde le incorporamos los valores ingresados desde el navegador que se encuentran guardados en sus variables

    let mascota = {
        nombre: nombreMascota,
        edad: edadMascota,
        tipo: tipoMascota
    }

    // Verificamos el valor ingresado si es 1 o 2 y le reasignamos el valor del tipo a un string con el tipo de mascota
    if (mascota.tipo === 1) {
        mascota.tipo = 'Gato'
    } else if (mascota.tipo === 2) {
        mascota.tipo = 'Perro'
    }

    // Con el método push insertamos la mascota registrada en el array de mascota
    listaMascotas.push(mascota)

    // Mostramos los datos de la mascota registrada en pantalla 
    alert(`Mascota registrada con éxito \n Nombre: ${mascota.nombre} \n Edad: ${mascota.edad} \n Tipo: ${mascota.tipo} \n "${mascota.nombre} se encuentra en lista de espera para un hogar donde le den mucho amor ♡"`)
}

// Ejecutamos por lo menos 1 ves la función para que mínimo registremos 1 mascota

registrarMascota()

// Ejecutamos un ciclo para registrar más mascotas hasta que el usuario ponga cancelar

while (confirm('¿Desea registrar otra mascota?')) {
    
    registrarMascota()
}

console.table(listaMascotas)