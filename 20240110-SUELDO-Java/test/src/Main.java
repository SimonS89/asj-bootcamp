
public class Main {

	public static void main(String[] args) {
		int edad;
		char letra;
		double numDouble;
		boolean estado;
		String nombre;
		float precio;
		
		edad = 25;
		letra = 'a';
		numDouble = 9.99;
		estado = false;
		nombre = "Natalin";
		precio = 88.99f;
		
		System.out.println("La edad es " + (edad +1));
		System.out.println(letra);
		System.out.println(numDouble);
		System.out.println(estado);
		System.out.println(nombre);
		System.out.println(precio);
		
		if (edad > 18) {
			System.out.println("Es mayor de edad, aqui tiene sus drogas y su alcohol señor mayor");
		} else {
			System.out.println("Es menos de edad, largo de aquí méndigo niño, ushcale");
		}
	}

}
