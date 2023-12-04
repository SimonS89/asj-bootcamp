/* Switch */
/* Es Par O Impar*/
// let numero = parseInt(prompt("ingrese un numero"));

// switch (numero % 2 == 0) {
//   case true:
//     alert("El numero es par");
//     break;
//   case false:
//     alert("El numero es impar");
//     break;
//   default:
//     alert("Mensaje por defecto");
//     break;
// }

/* Palabra en ingles */

// let palabra = prompt("Ingrese una palabra").toLowerCase();

// switch (palabra) {
//   case "casa":
//     alert("House");
//     break;
//   case "perro":
//     alert("Dog");
//     break;
//   case "pelota":
//     alert("Ball");
//     break;
//   case "arbol":
//     alert("Tree");
//     break;
//   case "genio":
//     alert("Genius");
//     break;
//   default:
//     alert("Palabra incorrecta");
//     break;
// }

/* Valoracion */

// let valoracion = prompt("Ingrese su valoracion de la pelicula").toLowerCase();

// switch (valoracion) {
//   case "muy mala":
//     alert(mensaje(valoracion, "Lo lamentamos mucho."));
//     break;
//   case "mala":
//     alert(mensaje(valoracion, "Lo lamentamos mucho."));
//     break;
//   case "regular":
//     alert(mensaje(valoracion, "Te recomendaremos una nueva pelicula."));
//     break;
//   case "buena":
//     alert(mensaje(valoracion, "Nos alegramos que te haya gustado."));
//     break;
//   case "muy buena":
//     alert(mensaje(valoracion, "Excelente!!."));
//     break;
//   default:
//     alert("Ingresaste un valor invalido");
//     break;
// }

// alert("Gracias por su calificación.");

// function mensaje(valoracion, respuesta) {
//   return `Calificaste la pelicula como ${valoracion} , ${respuesta}`;
// }

/* While */

/* Sumatoria */

// let numero = prompt("ingrese un numero");

// while (Number.isNaN(parseInt(numero))) {
//   numero = parseInt(prompt("numero incorrecto, ingrese otro numero"));
// }

// calcularPromedio(numero);

// function calcularPromedio(numero) {
//   let i = 0;
//   let accum = 0;
//   while (i < numero) {
//     accum += i;
//     i++;
//     console.log(i);
//   }
//   alert(accum / numero);
// }

/* Contador de positivos */

// let numeroEntero = parseInt(prompt("Ingrese un numero entero"));
// let i = 0;

// while (numeroEntero >= 0) {
//   if (numeroEntero != 0) i++;
//   numeroEntero = parseInt(prompt("Ingrese un numero entero"));
// }

// console.log("cantidad de numeros positivos " + i);

/* Extras */

/* FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz". */

// let i = 1;

// while (i <= 100) {
//   let msg = "";
//   if (i % 3 == 0 && i % 5 == 0) msg = `${i} : FizzBuzz`;
//   else if (i % 3 == 0) msg = `${i} : Fizz`;
//   else if (i % 5 == 0) msg = `${i} : Buzz`;
//   else msg = i;
//   i++;
//   console.log(msg);
// }

/* simular un bar con una mesa, cuando llegue el cliente elija productos por titulo y precio, puede acumular esos productos, que pueda pedir la cuenta y mostrar el total, luego
pregunte si puedo dejar propina, sumarla al total, saludar al mozo, o pedirle que cuente un chiste.

1- usuario, en un bar y puede pedir cosas!
¿Qué quiere hacer?
Opciones- Saludar, pedir, carta o producto "Gaseosa, medialuna, café, pizza"
Mas opciones-  Pedir que cuente chiste, pedir de nuevo otra cosas,
traer la cuenta, propina.
*/

// let total = 0;
// let bienvenida;
// do {
//   bienvenida = prompt(
//     "Bienvenido a nuestro restaurant Elija una opcion : \n1. Ordenar. \n2. pedir un chiste. \n3. Pedir la cuenta."
//   );
//   switch (bienvenida) {
//     case "1":
//       let menu;
//       do {
//         menu = prompt(
//           "Que desea consumir/agregar? \n1. Gaseosa $100 \n2. medialuna $200 \n3. cafe $300\n4. pizza $400\n5. Volver al menu principal."
//         );
//         switch (menu) {
//           case "1":
//             total += 100;
//             alert("Te agregamos una gaseosa, costo total al momento $" + total);
//             break;
//           case "2":
//             total += 200;
//             alert(
//               "Te agregamos una medialuna, costo total al momento $" + total
//             );
//             break;
//           case "3":
//             total += 300;
//             alert("Te agregamos un cafe, costo total al momento $" + total);
//             break;
//           case "4":
//             total += 400;
//             alert("Te agregamos una pizza, costo total al momento $" + total);
//             break;
//           case "5":
//             alert("volviendo al menu principal");
//             break;
//           default:
//             alert("Opcion incorrecta");
//             break;
//         }
//       } while (menu != "5");
//       break;
//     case "2":
//       alert("¿Qué le dice un .GIF a un .JPEG? -Anímate viejo.");
//       break;
//     case "3":
//       alert(
//         `lo consumido tiene un costo de $ ${total}, con una recarga de $ ${
//           total * 0.1
//         } , total $ ${total + total * 0.1}. Vuelva pronto`
//       );
//       break;
//     default:
//       alert("Opcion incorrecta");
//       break;
//   }
// } while (bienvenida != "3");
