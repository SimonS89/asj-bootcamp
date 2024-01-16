import java.util.Iterator;
import java.util.Scanner;

import javax.sound.midi.Soundbank;

public class Main {

	public static void main(String[] args) {
		/*
		  System.out.println("int: Min =" + Integer.MIN_VALUE + " - Max= " +
		  Integer.MAX_VALUE);
		  
		  
		  System.out.println("byte: Min = " + Byte.MIN_VALUE + " - Max = " +
		  Byte.MAX_VALUE);
		  
		  
		  System.out.println("short: Min = " + Short.MIN_VALUE + " - Max = " +
		  Short.MAX_VALUE);
		  
		  
		  System.out.println("long: Min = " + Long.MIN_VALUE + " - Max = " +
		  Long.MAX_VALUE);
		  
		  
		  System.out.println("float: Min = " + Float.MIN_VALUE + " - Max = " +
		  Float.MAX_VALUE);
		  
		  
		  System.out.println("double: Min = " + Double.MIN_VALUE + " - Max = " +
		  Double.MAX_VALUE);
		  
		 
		  System.out.println("char: Min = " + (int) Character.MIN_VALUE + " - Max = " +
		  (int) Character.MAX_VALUE);
		  
		  System.out.println(40/12.5);
		 */

		Scanner scanner = new Scanner(System.in);

		/*
		  System.out.println("Ingrese una palabra"); String palabraString =
		  scanner.nextLine(); String auxString = palabraString + " => "; int
		  valorAscii;
		  
		  for (int i = 0; i < palabraString.length(); i++) { valorAscii =
		  palabraString.charAt(i); auxString += " " + (valorAscii == 32 ? " " :
		  valorAscii); }
		  
		  System.out.println(auxString);
		 */

		/*
		  System.out.println("Cuantas notas quiere ingresar?"); int cantidad =
		  scanner.nextInt(); double total = .0; int j = 1;
		  
		  for (int i = 1; i <= cantidad; i++) { System.out.println("Nota nro : "+(i));
		  total += scanner.nextDouble(); }
		  
		  while(j<=cantidad) { System.out.println("Nota nro : "+(j)); total +=
		  scanner.nextDouble(); j++; }
		  
		  do { System.out.println("Nota nro : "+(j)); total += scanner.nextDouble();
		  j++; } while (j<=cantidad);
		  
		  System.out.println("promedio : "+ total/cantidad);
		 */

		/*
		  System.out.println("Ingrese los grados del 1er angulo del triangulo"); int
		  ang1 = scanner.nextInt();
		  System.out.println("Ingrese los grados del 2do angulo"); int ang2 =
		  scanner.nextInt(); System.out.println("Ingrese los grados del 3er angulo");
		  int ang3 = scanner.nextInt();
		  
		  if (ang1 + ang2 + ang3 == 180) System.out.println("Es un triangulo valido");
		  else System.out.println("No es un triangulo");
		 */

		
		  /*System.out.println("Ingrese una oracion"); String oracion =
		  scanner.nextLine();
		  
		  if(Character.isDigit(oracion.charAt(0)))System.out.println("Comienza con numero");
		  else if (Character.isAlphabetic(oracion.charAt(0)))  System.out.println("Comienza con letra");
		  else System.out.println("Caracter raro");*/
		 

		/*
		  int total = 0; System.out.println("Ingrese el numero menor"); int menor =
		  scanner.nextInt(); System.out.println("Ingrese el numero mayor"); int mayor =
		  scanner.nextInt();
		  
		  for (int i = menor; i <= mayor; i++) { if(i%2==0 && i >1) total+= i; }
		  System.out.println("El total es de : " + total);
		 */

		
		  /*System.out.println("Ingrese un numero , le diremos si es perfecto o no.");
		  int numero = scanner.nextInt();
		  
		  int acc = 1;
		  
		  for (int i = 2; i <= numero/2; i++) { if(numero %i ==0) acc+=i; }
		  
		  System.out.println(acc ==
		  numero?"Numero perfecto":"No es un numero perfecto");
		 */
		
		  System.out.println("Ingrese un numero"); int numero = scanner.nextInt();
		   

		scanner.close();
	}
}
