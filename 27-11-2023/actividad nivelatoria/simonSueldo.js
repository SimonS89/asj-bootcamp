/* Es Par o Impar? */
// let numeroUsuario = parseInt(
//   prompt("Ingrese un numero, le responderemos si es par o impar.")
// );
// let msg = "El numero ingresado es : ";
// alert(numeroUsuario % 2 === 0 ? msg + "Par." : msg + "Impar.");

/*Alumnos aprobados/desaprobados*/
let alumnos = [
  {
    nombre: "Mariano Damian",
    apellido: "Hernandez",
    notas: [8, 7, 9, 10, 6],
  },
  {
    nombre: "Ramiro",
    apellido: "Diaz",
    notas: [1, 3, 8, 2, 1],
  },
  {
    nombre: "Ana",
    apellido: "Armella",
    notas: [5, 7, 9, 4, 2],
  },
  {
    nombre: "Romina",
    apellido: "Almeda",
    notas: [10, 6, 7, 5, 9],
  },
  {
    nombre: "Denis",
    apellido: "Tolaba",
    notas: [10, 10, 9, 9, 10],
  },
  {
    nombre: "Hugo",
    apellido: "Castellano",
    notas: [2, 3, 3, 6, 1],
  },
  {
    nombre: "Analia Daiana",
    apellido: "Fonseca",
    notas: [4, 3, 4, 5, 2],
  },
  {
    nombre: "Francisco Daniel",
    apellido: "Samir",
    notas: [5, 5, 6, 4, 2],
  },
];

function promedio(alumnos, estado) {
  const puntajeAprobado = 6;
  let alumnosObtenidos = alumnos.map((alumno) => {
    let nuevoAlumno = { nombreCompleto: "", promedio: 0, estado: "" };
    nuevoAlumno.promedio =
      alumno.notas.reduce((a, b) => a + b) / alumno.notas.length;
    nuevoAlumno.nombreCompleto = alumno.nombre + " " + alumno.apellido;
    nuevoAlumno.estado =
      nuevoAlumno.promedio >= puntajeAprobado ? "aprobado" : "desaprobado";
    return nuevoAlumno;
  });
  return alumnosObtenidos.filter((alumno) => alumno.estado === estado);
}

console.log(promedio(alumnos, "desaprobado"));
