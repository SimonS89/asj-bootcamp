package superheroes;

public class Dimension {
	private double alto;
	private double ancho;
	private double profundidad;
	
	public Dimension() {
		this.alto = 0;
		this.ancho = 0;
		this.profundidad = 0;
	}

	public Dimension(double alto, double ancho, double profundidad) {
		this.alto = alto;
		this.ancho = ancho;
		this.profundidad = profundidad;
	}

	public double getAlto() {
		return alto;
	}

	public void setAlto(double alto) {
		this.alto = alto;
	}

	public double getAncho() {
		return ancho;
	}

	public void setAncho(double ancho) {
		this.ancho = ancho;
	}

	public double getProfundidad() {
		return profundidad;
	}

	public void setProfundidad(double profundidad) {
		this.profundidad = profundidad;
	}

	@Override
	public String toString() {
		return " alto: " + alto + ", ancho: " + ancho + ", profundidad: " + profundidad;
	}
			
	public double getVolumne() {
		return this.profundidad * this.ancho * this.alto;
	}
	

}
