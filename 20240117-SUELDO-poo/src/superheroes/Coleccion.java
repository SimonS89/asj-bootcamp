package superheroes;

import java.util.ArrayList;
import java.util.List;

public class Coleccion {

	private String nombre;
	private List<Figura> figuras;

	public Coleccion(String nombre) {
		this.nombre = nombre;
		this.figuras = new ArrayList<Figura>();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void agregarFigura(Figura fig) {
		this.figuras.add(fig);
	}

	public void subirPrecio(double cantidad, String id) {

		boolean encontrada = false;
		int i = 0;

		while (!encontrada && i < this.figuras.size()) {

			Figura figura = this.figuras.get(i);

			if (figura.getCodigo().equals(id)) {
				encontrada = true;
				figura.subirPrecio(cantidad);
			}
			i++;
		}
	}

	public void mostrarColeccion() {
		System.out.println("Nombre colección: " + this.nombre + "\nFiguras de la colección: ");
		for (Figura figura : figuras) {
			System.out.println(figura.toString());
		}
	}

	@Override
	public String toString() {
		return "Coleccion [nombre=" + nombre + ", figuras=" + figuras + "]";
	}

	public void conCapa() {
		System.out.println("Héroes con capa: ");
		for (Figura figura : figuras) {
			if (figura.getSuperheroe().isCapa()) {
				System.out.println(figura);
			}
		}
	}

	public Figura masValioso() {

		Figura figMax = null;
		if (!this.figuras.isEmpty()) {

			figMax = this.figuras.get(0);
			for (Figura figura : figuras) {

				if (figura.getPrecio() > figMax.getPrecio()) {
					figMax = figura;
				}
			}

		}
		System.out.println("La figura más valiosa de la colección es: " + figMax);
		return figMax;
	}

	public double getValorColeccion() {
		double total = 0;
		if (!this.figuras.isEmpty()) {
			for (Figura figura : figuras) {
				total += figura.getPrecio();
			}
		}
		System.out.println("El valor total de la colección es: " + total);
		return total;
	}
	
	public double getVolumneColeccion() {
		double total = 0;
		if (!this.figuras.isEmpty()) {
			for (Figura figura : figuras) {
				total += figura.getDimension().getVolumne();
			}
			total += 200;
		}
		System.out.println("El volumne total de la colección es: " + total);
		return total;
		
	}

}
