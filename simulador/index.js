

// Variables de ingreso de datos

let nombreAlumno = prompt('¿Cual es le nombre del alumno?');
let notaAlumno1 = parseInt(prompt('¿Cual es la nota del alumno en el primer trimestre?'));
let notaAlumno2 = parseInt(prompt('¿Cual es la nota del alumno en el segundo trimestre?'));
let notaAlumno3 = parseInt(prompt('¿Cual es la nota del alumno en el tercer trimestre?'));


// Variables de cálculos

let notaPromedio = (notaAlumno1 + notaAlumno2 + notaAlumno3) / 3;
let notaAprobacion = 6;
let notaPromocion = 8;

// Variables de resultados

let resultadoAlumnos;

if (notaPromedio >= notaAprobacion) {
    resultadoAlumnos = 'Aprobado';
} else if (notaPromedio < notaAprobacion && notaPromedio >= notaPromocion) {
    resultadoAlumnos = 'Promocionado';
} else {
    resultadoAlumnos = 'Reprobado';
}


alert(`El alumno ${nombreAlumno} tiene un promedio de ${notaPromedio} y está ${resultadoAlumnos}`); 

