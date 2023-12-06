/* Bar con funciones */

// let total = 0;
// let bienvenida;

// App();

// function App() {
//   do {
//     bienvenida = prompt(
//       "Bienvenido a nuestro restaurant Elija una opcion : \n1. Ordenar. \n2. pedir un chiste. \n3. Pedir la cuenta."
//     );
//     switch (bienvenida) {
//       case "1":
//         menuCliente(total);
//         break;
//       case "2":
//         alert("¿Qué le dice un .GIF a un .JPEG? -Anímate viejo.");
//         break;
//       case "3":
//         calcularCosto(total);
//         break;
//       default:
//         alert("Opcion incorrecta");
//         break;
//     }
//   } while (bienvenida != "3");
// }

// function menuCliente() {
//   let menu;
//   do {
//     menu = prompt(
//       "Que desea consumir/agregar? \n1. Gaseosa $100 \n2. medialuna $200 \n3. cafe $300\n4. pizza $400\n5. Volver al menu principal."
//     );
//     switch (menu) {
//       case "1":
//         total += 100;
//         alert("Te agregamos una gaseosa, costo total al momento $" + total);
//         break;
//       case "2":
//         total += 200;
//         alert("Te agregamos una medialuna, costo total al momento $" + total);
//         break;
//       case "3":
//         total += 300;
//         alert("Te agregamos un cafe, costo total al momento $" + total);
//         break;
//       case "4":
//         total += 400;
//         alert("Te agregamos una pizza, costo total al momento $" + total);
//         break;
//       case "5":
//         alert("volviendo al menu principal");
//         break;
//       default:
//         alert("Opcion incorrecta");
//         break;
//     }
//   } while (menu != "5");
// }

// function calcularCosto() {
//   alert(
//     `lo consumido tiene un costo de $ ${total}, con una recarga de $ ${
//       total * 0.1
//     } , total $ ${total + total * 0.1}. Vuelva pronto`
//   );
// }

// Fibonacci

/* Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34 */

// let numero = parseInt(prompt("Ingrese un numero"));

// alert(fibonacci(numero));

// function fibonacci(numero) {
//   const array = [];

//   let i = 0;

//   while (i < numero) {
//     i < 2 ? (array[i] = i) : (array[i] = array[i - 1] + array[i - 2]);
//     i++;
//   }

//   return array;
// }

/* DOM */

// const titleName = document.getElementById("titleName");
// const titleLastname = document.getElementById("titleLastname");
// const inputName = document.getElementById("name");
// const inputLastname = document.getElementById("lastname");
// const btnReplace = document.getElementById("replace");

// btnReplace.addEventListener("click", () => {
//   titleName.textContent = inputName.value;
//   titleLastname.style.color = "red";
//   titleLastname.textContent = inputLastname.value;
// });

const display = document.querySelector(".calculator_display");
const botonesNum = document.getElementsByClassName("btnNum");
const botonClear = document.querySelector(".btnClear");
const botonesOp = document.getElementsByClassName("btnOp");

let param1 = "";
let param2 = "";
let flag = false;
let operation = "";
let result = "";

for (const botonNum of botonesNum) {
  botonNum.addEventListener("click", (e) => {
    if (!flag) {
      param1 += e.target.textContent;
      display.textContent = param1;
    } else {
      param2 += e.target.textContent;
      display.textContent = param2;
    }
  });
}

for (const botonOp of botonesOp) {
  botonOp.addEventListener("click", (e) => {
    if (e.target.textContent == "=") {
      display.textContent = calcular(param1, param2, operation);
    }
    flag = !flag;
    operation = e.target.textContent;
    console.log(operation);
  });
}

botonClear.addEventListener("click", () => {
  display.textContent = "0";
  param1 = "";
  param2 = "";
});

function calcular(param1, param2, op) {
  return eval(parseInt(param1) + op + parseInt(param2));
}
