package test;

import java.time.LocalDate;
import java.util.Iterator;
import java.util.Scanner;

public class Funciones {

	public static void main(String[] args) {

//		menu();
//		ejercicioDos();
//		ejercicioTres();
//		mostrarMatriz(ejercicioCuatro());
//		ejercicioCinco();
//		ejercicioSeis();
		ejercicioSiete();

	}

	/* Ejercicio 1 */

	static final Scanner scanner = new Scanner(System.in);
	static String movimientos = "";

	public static double extraccion(double saldoActual) {
		System.out.println("=========== Extracción ===========");
		System.out.println("Ingrese el monto que desea extraer");
		double monto = scanner.nextDouble();
		if (monto <= 0)
			System.out.println("El monto debe ser mayor a 0");
		else if (monto > saldoActual)
			System.out.println("El monto a extraer no puede superar al saldo");
		else {
			saldoActual -= monto;
			System.out.println("Extrajo $" + monto + ", Su nuevo saldo es de $" + saldoActual);
		}
		movimientos += "Fecha : " + LocalDate.now() + " - Extraccion : $" + monto + " - Saldo :$" + saldoActual + "\n";
		return saldoActual;
	}

	public static double depositar(double saldoActual) {
		System.out.println("*********** Depósito ***********");
		System.out.println("Ingrese el monto que desea depositar");
		double monto = scanner.nextDouble();
		if (monto <= 0)
			System.out.println("El monto debe ser mayor a 0");
		else {
			saldoActual += monto;
			System.out.println("Depositó $" + monto + ",su nuevo saldo es de $" + saldoActual);
		}
		movimientos += "Fecha : " + LocalDate.now() + " - Depósito : $" + monto + " - Saldo :$" + saldoActual + "\n";
		System.out.println();
		return saldoActual;
	}

	public static void verMovimientos() {
		System.out.println("*********** Movimientos ***********");
		if (movimientos == "")
			System.out.println("No hay movimientos disponibles.");
		else {
			System.out.println("Movimientos");
			System.out.println(movimientos);
		}
	}

	public static void menu() {
		System.out.println("Ingrese el saldo inicial");
		double saldo = scanner.nextDouble();
		System.out.println("Su saldo inicial es de $" + saldo);
		int opcion;
		do {
			System.out.println(
					"Que operacion desea realizar?\n1.Extraer.\n2.Depositar.\n3.Consultar saldo.\n4.Ver Ultimos Movimientos.\n5.Salir.");
			opcion = scanner.nextInt();
			switch (opcion) {
			case 1: {
				saldo = extraccion(saldo);
				break;
			}
			case 2: {
				saldo = depositar(saldo);
				break;
			}
			case 3: {
				System.out.println("Su saldo actual es de $" + saldo);
				break;
			}
			case 4: {
				verMovimientos();
				break;
			}
			case 5: {
				System.out.println("Gracias por utilizar nuestra aplicacion");
				break;
			}
			default:
				System.out.println("Opcion incorrecta");
				break;
			}

		} while (opcion != 5);
	}

	/* Ejercicio 2 */

	public static void ejercicioDos() {
		System.out.println("Ingrese 15 numeros");
		int[] vector = new int[15];
		int i = 0;
		while (i < vector.length) {
			System.out.print("Numero en la posición " + i + ": ");
			vector[i] = scanner.nextInt();
			i++;
		}

		int auxUltimo = vector[vector.length - 1];

		System.out.println("Vector inicial :");
		mostrarVector(vector);

		i = vector.length - 1;
		while (i > 0) {
			vector[i] = vector[i - 1];
			i--;
		}

		vector[0] = auxUltimo;

		System.out.println("\nVector rotado :");
		mostrarVector(vector);
	}

	/* Ejercicio 3 */

	public static void ejercicioTres() {
		int[] vector = new int[20];
		int[] vectorOrdenado = new int[20];
		int cantPares = 0;
		int indicePares = 0;

		for (int i = 0; i < vector.length; i++) {
			vector[i] = (int) (Math.random() * 101);
			if (esPar(vector[i]))
				cantPares++;
		}

		int indiceImpares = cantPares;

		for (int i = 0; i < vector.length; i++) {
			if (esPar(vector[i])) {
				vectorOrdenado[indicePares] = vector[i];
				indicePares++;
			} else {
				vectorOrdenado[indiceImpares] = vector[i];
				indiceImpares++;
			}
		}
		System.out.println("Vector original :");
		mostrarVector(vector);

		System.out.println("\nVector ordenado :");
		mostrarVector(vectorOrdenado);
	}

	public static boolean esPar(int num) {
		return num == 0 || (num > 1 && num % 2 == 0);
	}

	/* Ejercicio 4 */

	public static int[][] ejercicioCuatro() {
		int[] vectorAleatorio = new int[9];
		int[][] matrizAleatoria = new int[3][3];

		for (int i = 0; i < vectorAleatorio.length; i++) {
			int nroAleatorio;
			do {
				nroAleatorio = (int) Math.ceil(Math.random() * 10);
			} while (seRepite(nroAleatorio, vectorAleatorio, i));
			vectorAleatorio[i] = nroAleatorio;
		}

		int contador = 0;
		for (int j = 0; j < matrizAleatoria.length; j++) {
			for (int k = 0; k < matrizAleatoria[j].length; k++) {
				matrizAleatoria[j][k] = vectorAleatorio[contador];
				contador++;
			}
		}
		return matrizAleatoria;
	}

	public static boolean seRepite(int numero, int[] vector, int limite) {
		for (int j = 0; j < limite; j++) {
			if (numero == vector[j]) {
				return true;
			}
		}
		return false;
	}

	/* Ejercicio 5 */

	public static void ejercicioCinco() {
		int[][] matrizAleatoria = ejercicioCuatro();
		mostrarMatriz(matrizAleatoria);
		System.out.println("Ingrese 1 para sumar una fila, o 2 para una columna");
		int eleccion = scanner.nextInt();
		System.out.println("Qué " + (eleccion == 1 ? "fila" : "columna") + " desea sumar?");
		int columnaFila = scanner.nextInt();
		int suma = 0;

		switch (eleccion) {
		case 1: {
			for (int j = 0; j < matrizAleatoria[0].length; j++) {
				suma += matrizAleatoria[columnaFila - 1][j];
			}
			break;
		}
		case 2: {
			for (int j = 0; j < matrizAleatoria[0].length; j++) {
				suma += matrizAleatoria[j][columnaFila - 1];
			}
			break;
		}
		default:
			System.out.println("Eleccion incorrecta");
			break;
		}

		System.out.println("La suma de la " + (columnaFila == 1 ? "fila" : "columna") + " es :" + suma);
	}

	public static void mostrarVector(int[] vector) {
		for (int num : vector) {
			System.out.print(num + " ");
		}
	}

	public static void mostrarMatriz(int[][] matriz) {
		for (int j = 0; j < matriz.length; j++) {
			for (int k = 0; k < matriz[j].length; k++) {
				System.out.print(matriz[j][k] + " ");
			}
			System.out.println();
		}
	}

	/* Ejercicio 6 */

	public static void ejercicioSeis() {
		int[][] matriz = new int[4][4];
		int suma = 0;
		int totalPromedio = 0;
		boolean matrizLlena = false;

		int opcion;
		do {
			System.out.println(
					"Que operacion desea realizar?\n1.Rellenar matriz.\n2.Suma de una fila.\n3.Suma de una columna.\n4.Sumar la diagonal principal.\n5.Sumar la diagonal inversa.\n6.Sumar media.\n7.Salir.");
			opcion = scanner.nextInt();

			while (opcion != 1 && !matrizLlena) {
				System.out.println("Debe llenar la matriz primero, elija la opcion 1");
				opcion = scanner.nextInt();
			}

			switch (opcion) {
			case 1: {
				matrizLlena = true;
				totalPromedio = 0;
				for (int j = 0; j < matriz.length; j++) {
					for (int k = 0; k < matriz[j].length; k++) {
						matriz[j][k] = (int) Math.ceil((Math.random() * 9));
						totalPromedio += matriz[j][k];
					}
				}
				mostrarMatriz(matriz);
				break;
			}
			case 2: {
				System.out.println("Ingrese la fila que desea sumar");
				int fila = scanner.nextInt();
				for (int j = 0; j < matriz[0].length; j++) {
					suma += matriz[fila - 1][j];
				}
				System.out.println("La suma de la fila " + fila + " es de " + suma);
				suma = 0;
				break;
			}
			case 3: {
				System.out.println("Ingrese la columna que desea sumar");
				int columna = scanner.nextInt();
				for (int j = 0; j < matriz[0].length; j++) {
					suma += matriz[j][columna - 1];
				}
				System.out.println("La suma de la columna " + columna + " es de " + suma);
				suma = 0;
				break;
			}
			case 4: {
				for (int j = 0; j < matriz[0].length; j++) {
					suma += matriz[j][j];
				}
				System.out.println("La suma de la diagonal principal es de " + suma);
				suma = 0;
				break;
			}
			case 5: {
				for (int j = 0; j < matriz[0].length; j++) {
					suma += matriz[j][matriz.length - 1 - j];
				}
				System.out.println("La suma de la diagonal inversa es de " + suma);
				suma = 0;
				break;
			}
			case 6: {
				System.out.println(matriz.length);
				System.out.println("El promedio de los valores de la matriz es de "
						+ totalPromedio / (matriz.length * matriz[0].length));
				break;
			}
			case 7: {
				System.out.println("Gracias por utilizar nuestra aplicacion");
				break;
			}
			default:
				System.out.println("Opcion incorrecta");
				break;
			}

		} while (opcion != 7);
	}

	/* Ejercicio 7 */

	public static void ejercicioSiete() {
		int[][] matrizPersonas = new int[10][3];
		int opcion;

		for (int j = 0; j < matrizPersonas.length; j++) {
			for (int k = 0; k < matrizPersonas[j].length; k++) {
				if (k < 2)
					matrizPersonas[j][k] = (int) (Math.random() * 2) + 1;
				else
					matrizPersonas[j][k] = (matrizPersonas[j][1] == 2) ? 0
							: (int) (Math.random() * (2000 - 600 + 1) + 600);
			}
		}

		do {
			System.out.println(
					"Que operacion desea realizar?\n1.Ver matriz.\n2.Porcentaje hombres.\n3.Porcentaje mujeres.\n4.Porcentaje hombres que trabajan.\n5.Porcentaje mujeres que trabajan.\n6.Sueldo promedio hombres.\n7.Sueldo promedio mujeres.\n8.Salir.");
			opcion = scanner.nextInt();
			switch (opcion) {
			case 1: {
				System.out.println("Mostrando matriz");
				mostrarMatriz(matrizPersonas);
				break;
			}
			case 2: {
				System.out.println(
						"El porcentaje de hombres es de : " + porcentajeTotalPorGenero(matrizPersonas, 1) + "%");
				break;
			}
			case 3: {
				System.out.println(
						"El porcentaje de mujeres es de : " + porcentajeTotalPorGenero(matrizPersonas, 2) + "%");
				break;
			}
			case 4: {
				System.out.println("El porcentaje de hombres que trabajan es de : "
						+ porcentajeTotalTrabajanGenero(matrizPersonas, 1) + "%");
				break;
			}
			case 5: {
				System.out.println("El porcentaje de mujeres que trabajan es de : "
						+ porcentajeTotalTrabajanGenero(matrizPersonas, 2) + "%");
				break;
			}
			case 6: {
				System.out.println("El sueldo promedio de los hombres es de $"+sueldoPromedioGenero(matrizPersonas, 1));
				break;
			}
			case 7: {
				System.out.println("El sueldo promedio de las mujeres es de $"+sueldoPromedioGenero(matrizPersonas, 2));
				break;
			}
			case 8: {
				System.out.println("Gracias por utilizar nuestra aplicacion");
				break;
			}
			default:
				System.out.println("Opcion incorrecta");
				break;
			}

		} while (opcion != 8);
	}

	public static int cantidadPorGenero(int[][] matriz, int genero) {
		int cantidad = 0;
		for (int[] persona : matriz) {
			if (persona[0] == genero)
				cantidad++;
		}
		return cantidad;
	}

	public static int cantidadPorGeneroTrabajan(int[][] matriz, int genero) {
		int contador = 0;
		for (int[] persona : matriz) {
			if (persona[0] == genero && persona[1] == 1) {
				contador++;
			}
		}
		return contador;
	}

	public static double porcentajeTotalPorGenero(int[][] matriz, int genero) {
		return (cantidadPorGenero(matriz, genero) * 100) / matriz.length;
	}

	public static double porcentajeTotalTrabajanGenero(int[][] matriz, int genero) {
		int totalGenero = cantidadPorGenero(matriz, genero);
		return (cantidadPorGeneroTrabajan(matriz, genero) * 100.0) / totalGenero;
	}

	public static double sueldoPromedioGenero(int[][] matriz, int genero) {
		int cantidadGeneroTrabajan = cantidadPorGeneroTrabajan(matriz, genero);
		double sueldoTotal = 0;
		for (int[] persona : matriz) {
			if (persona[0] == genero) {
				sueldoTotal += persona[2];
			}
		}
		return sueldoTotal / cantidadGeneroTrabajan;
	}

//	 private static String traducirNumeros(String numeros) {
//	        StringBuilder resultado = new StringBuilder();
//
//	        String[] tecladoNumerico = {
//	                " ",   // 0
//	                "",    // 1
//	                "ABC", // 2
//	                "DEF", // 3
//	                "GHI", // 4
//	                "JKL", // 5
//	                "MNO", // 6
//	                "PQRS",// 7
//	                "TUV", // 8
//	                "WXYZ" // 9
//	        };
//
//	        String[] numerosArray = numeros.split(" ");
//
//	        for (String numero : numerosArray) {
//	            try {
//	            	char[] aux = numero.toCharArray();
//	            	if (aux.length==1) {
//	            		int i = Character.getNumericValue(aux[0]);
//	            		resultado.append(tecladoNumerico[i].toCharArray()[0]);
//					}else if(aux.length==2) {
//						int i = Character.getNumericValue(aux[0]);
//	            		resultado.append(tecladoNumerico[i].toCharArray()[1]);
//					}else if (aux.length==3) {
//						int i = Character.getNumericValue(aux[0]);
//	            		resultado.append(tecladoNumerico[i].toCharArray()[2]);
//					}
//
//	            } catch (NumberFormatException e) {
//	                // Si no es un número válido, agregar un espacio
//	                resultado.append(' ');
//	            }
//	        }
//
//	        return resultado.toString();
//	

}
