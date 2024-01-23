package superheroes;

public class Main {

	public static void main(String[] args) {

		Superheroe heman = new Superheroe("He-Man"); 
		heman.setDescripcion("Es el guerrero elegido para proteger los secretos del Castillo Grayskull de las fuerzas del mal, siendo conocido como el hombre más poderoso del universo.");
		
		Superheroe superhijitus = new Superheroe("Superhijitus");
		superhijitus.setCapa(true);
		superhijitus.setDescripcion("Este tierno personaje vivía en las afueras de Trulalá, junto a su fiel perro Pichichus.");
		
		
		Coleccion coleccion1 = new Coleccion("Colección vintage");
		
		Dimension dimensionHijitus = new Dimension(14,6,5);
		Dimension dimensionHeman = new Dimension(25,15,8);
		 
		Figura figuraHijitus = new Figura ("H123",50000, superhijitus, dimensionHijitus);
		Figura figuraHeman = new Figura ("HE987",5, heman, dimensionHeman);
		
		figuraHeman.subirPrecio(10);
		
		coleccion1.agregarFigura(figuraHijitus);
		coleccion1.agregarFigura(figuraHeman);
		
		coleccion1.mostrarColeccion();
		
		System.out.println();
		coleccion1.masValioso();
		System.out.println();
		coleccion1.getVolumneColeccion();
		System.out.println();
		coleccion1.getValorColeccion();
		System.out.println();
		coleccion1.conCapa();

	}

}
