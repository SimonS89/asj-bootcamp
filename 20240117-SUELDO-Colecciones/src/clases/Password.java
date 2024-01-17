package clases;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Password {

	private int longitud = 8;
	private String contrasenia;
	private Scanner scanner = new Scanner(System.in);

	public Password() {
		this.contrasenia = generarPassword();
	}

	public Password(int longitud) {
		this.longitud = longitud;
		this.contrasenia = generarPassword();
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
		this.contrasenia = generarPassword();
	}

	public String getContrasenia() {
		return contrasenia;
	}

	private String generarPassword() {
		String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		String contraseniaGenerada = "";

		for (int i = 0; i < this.longitud; i++) {
			contraseniaGenerada += caracteres.toCharArray()[(int) (Math.random() * caracteres.length())];
		}
		return contraseniaGenerada;
	}

	@Override
	public String toString() {
		return "Password [longitud=" + longitud + ", contrasenia=" + contrasenia + "]";
	}

	public boolean esFuerte(String password) {
		int mayus = 0;
		int minus = 0;
		int nums = 0;

		for (int i = 0; i < password.length(); i++) {
			char caracter = password.charAt(i);
			if (Character.isUpperCase(caracter))
				mayus++;
			else if (Character.isLowerCase(caracter))
				minus++;
			else if (Character.isDigit(caracter))
				nums++;
		}
		return (mayus > 2) && (minus > 1) && (nums > 5);
	}

	public void ejecutar() {
		List<String> contrasenias = new ArrayList<String>();
		String eleccion;

		System.out.println("Ingrese 1 para ingresar una contraseña, 2 para terminar.");
		eleccion = scanner.nextLine();
		while (eleccion.equals("1")) {
			System.out.println("Ingrese la contrasenia");
			contrasenias.add(scanner.nextLine());
			System.out.println("Si desea agregar otra ingrese 1, para finalizar ingrese 2");
			eleccion = scanner.nextLine();
		}
		this.mostrarContrasenias(contrasenias);
	}
	
	private void mostrarContrasenias(List<String> contrasenias) {
		for (String contrasenia : contrasenias) {
			System.out.println("Contrasenia : "+contrasenia + (esFuerte(contrasenia)?" - es fuerte":" - es débil"));
		}
	}

}
