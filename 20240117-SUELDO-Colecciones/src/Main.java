import java.util.Scanner;

import clases.Calculadora;
import clases.Cuenta;
import clases.Password;
import clases.Persona;

public class Main {
	
	public static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {

		/* Ejercicio 1 */

//		Calculadora calculadora = new Calculadora(5, 10);
//		calculadora.suma();
//		calculadora.operacion('*');

		/* Ejercicio 2 */

//		Cuenta cuenta = new Cuenta("Martin");
//		cuenta.ingresar();
//		cuenta.retirar();
//		cuenta.retirar();
//		cuenta.retirar();

		/* Ejercicio 3 */
		
		Password password = new Password();
		System.out.println(password);
		password.setLongitud(11);
		System.out.println(password);
		password.ejecutar();
		
		/* Ejercicio 4 */
//		Persona persona1 = new Persona("Hugo",72,'H',75,182);
//		Persona persona2 = new Persona("Martin",32,'S');
//		Persona persona3 = new Persona();
//		Persona persona4 = new Persona("Beatriz",15,'M',40,190);
//		persona1.mostrarInfo();
//		persona2.mostrarInfo();
//		persona3.mostrarInfo();
//		persona4.mostrarInfo();
	}

}
