/* Ejercicio 4 */

// function mostrarInput() {
//   let userInput = prompt("Ingrese una oración");
//   return userInput;
// }

// console.log(mostrarInput());

/* Ejercicio 5 */

// let edadAños = parseInt(prompt("Ingrese su edad"));

// function edadEnDias(edadAños) {
//   return edadAños * 365;
// }

// console.log(edadEnDias(edadAños));

/* Ejercicio 6 */

// let num1 = parseInt(prompt("Ingrese un numero"));
// let num2 = parseInt(prompt("Ingrese otro numero"));
// let resultado;

// function suma(num1, num2) {
//   return num1 + num2;
// }

// resultado = suma(num1, num2);
// console.log(resultado);

/* Ejercicio 7 - 1*/

// let edad = parseInt(prompt("Ingrese su edad"));
// let edadMax = parseInt(prompt("Ingrese su expectativa de vida maxima"));
// let snack = prompt("Ingrese su snack favorito");
// let snackXDia = parseInt(
//   prompt("ingresa la cantidad de snacks que comeras por dia")
// );
// let precioUnidad = parseFloat(
//   prompt("Ingresa el precio del snack por unidad, Ej : 10.99")
// );
// let totalSnacks;
// let costoTotal;

// function calculadoraSnacks(edad, edadMax, snackXDia) {
//   return (edadMax - edad) * 365 * snackXDia;
// }

// function calculadoraCosto(totalSnacks, precioUnidad) {
//   return totalSnacks * precioUnidad;
// }

// function mensajeUsuario(totalSnacks, costoTotal, edadMax, snack) {
//   return `Necesitarás ${totalSnacks} ${snack} para que te alcancen hasta los ${edadMax} años, y gastaras un total de $ ${costoTotal}`;
// }

// totalSnacks = calculadoraSnacks(edad, edadMax, snackXDia);
// costoTotal = calculadoraCosto(totalSnacks, precioUnidad);
// console.log(mensajeUsuario(totalSnacks, costoTotal, edadMax, snack));

/* Ejercicio 7 - 2 */

// let diasViaje = parseInt(prompt("Ingrese la cantidad de dias de viaje"));
// let presupuesto = parseFloat(
//   prompt("Ingrese su presupuesto total, Ej : 10000.00")
// );
// let comidasXDia = parseInt(prompt("ingrese las comidas diarias a realizar"));

// function costoXComida(presupuesto, comidasXDia, diasViaje) {
//   return presupuesto / (comidasXDia * diasViaje);
// }

// function mensaje(presupuesto, comidasXDia, diasViaje) {
//   let comidaUnidad = costoXComida(presupuesto, comidasXDia, diasViaje);
//   return `podes gastar ${comidaUnidad} en cada comida para que te alcance la plata durante los ${diasViaje} dias de viaje`;
// }

// console.log(mensaje(presupuesto, comidasXDia, diasViaje));

/* Ejercicio ES6 - 1*/

// let nombre = "Gabriela";
// let profesion = "programadora";

// console.log(`${nombre} es ${profesion}`);

/* Ejercicio ES6 - 2*/

// let precioXArticulo = parseFloat(prompt("Ingrese el precio del articulo"));
// let cantidadXArticulo = parseInt(prompt("Ingrese la cantidad a comprar"));

// function mensaje(precioXArticulo, cantidadXArticulo) {
//   return `El costo total es de $ ${precioXArticulo * cantidadXArticulo}`;
// }

// console.log(mensaje(precioXArticulo, cantidadXArticulo));
