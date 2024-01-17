package clases;

public class Calculadora {
	private double num1;
	private double num2;
	
	public Calculadora(double num1,double num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	
	public void operacion(char signo) {
		switch (signo) {
		case '+': {
			suma();
			break;
		}
		case '-': {
			resta();
			break;
		}
		case '*': {
			multiplicacion();
			break;
		}
		case '/': {
			division();
			break;
		}
		default:
			System.out.println("Opcion incorrecta");
		}
	}
	
	public void suma() {
		System.out.println("El resultado de la suma es "+(this.num1+this.num2));
	}
	
	public void resta() {
		System.out.println("El resultado de la resta es "+(this.num1-this.num2));
	}
	
	public void multiplicacion() {
		System.out.println("El resultado de la multiplicacion es "+(this.num1*this.num2));
	}
	
	public void division() {
		if(this.num2!=0)		System.out.println("El resultado de la division es "+(this.num1/this.num2));
		else System.out.println("No se puede dividir por 0");
	}
}
