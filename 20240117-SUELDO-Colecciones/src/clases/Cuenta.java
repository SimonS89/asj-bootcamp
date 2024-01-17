package clases;

import java.util.Scanner;

public class Cuenta {
	private String titular;
	private double cantidad;
	Scanner scanner = new Scanner(System.in);

	public Cuenta(String titular) {
		this.titular = titular;
	}

	public Cuenta(String titular, double cantidad) {
		this.titular = titular;
		this.cantidad = cantidad;
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular(String titular) {
		this.titular = titular;
	}

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}

	public void ingresar() {
		System.out.println("Ingrese el monto que desea depositar");
		double monto = scanner.nextDouble();
		if (monto > 0) {
			this.cantidad += monto;
			System.out.println("Su saldo actual es de "+this.cantidad);
		}
		else
			System.out.println("El monto a ingresar no puede ser igual o menor a 0");
	}

	public void retirar() {
		System.out.println("Ingrese el monto que desea retirar");
		double monto = scanner.nextDouble();
		if (monto <= 0)
			System.out.println("Ingrese un monto valido");
		else if (monto > this.cantidad) {
			this.cantidad = 0;
			System.out.println("Su saldo actual es de "+this.cantidad);
		}
		else {
			this.cantidad -= monto;
			System.out.println("Su saldo actual es de "+this.cantidad);
		}
	}

	@Override
	public String toString() {
		return "Cuenta [titular=" + titular + ", cantidad=" + cantidad + "]";
	}

}
