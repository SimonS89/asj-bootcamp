package clases;

public class Persona {

	private String nombre;
	private int edad;
	private int dni;
	private char sexo;
	private int peso;
	private int altura;

	public Persona() {
		this.nombre = "";
		this.sexo = 'H';
		this.dni = generarDni();
	}

	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDni();
		this.sexo = comprobarSexo(sexo);
	}

	public Persona(String nombre, int edad, char sexo, int peso, int altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDni();
		this.sexo = comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}

	public int calcularIMC() {
		int isIdeal = 0;
		if (peso != 0) {
			double imc = this.peso / (this.altura * this.altura);
			if (imc < 20)
				isIdeal = -1;
			else if (imc > 25)
				isIdeal = 1;
		}
		return isIdeal;
	}

	private char comprobarSexo(char sexo) {
		return sexo == 'M' ? 'M' : 'H';
	}

	private int generarDni() {
		int dni = (int) (Math.random() * (50000000 - 1)) + 1;
		return dni;
	}

	public boolean esMayorDeEdad() {
		return this.edad >= 18;
	}

	public void mostrarInfo() {
		System.out.println("Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo
				+ ", peso=" + peso + ", altura=" + altura + ", calcularIMC()="
				+ (calcularIMC() == 0 ? " Peso ideal" : calcularIMC() == 1 ? " Sobrepeso" : "Debajo del peso")
				+ ", esMayorDeEdad()=" + (esMayorDeEdad() ? " Si" : " No") + "]");
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = comprobarSexo(sexo);
		;
	}

	public int getPeso() {
		return peso;
	}

	public void setPeso(int peso) {
		this.peso = peso;
	}

	public int getAltura() {
		return altura;
	}

	public void setAltura(int altura) {
		this.altura = altura;
	}

}
