package com.asj.prueba.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asj.prueba.model.Alumno;

@RestController
public class AlumnoController {

	List<Alumno> alumnos = new ArrayList<Alumno>(
			Arrays.asList(new Alumno(1, "Bob", "Patiño", 9.5), new Alumno(2, "Moe", "Sczyslak", 4),
					new Alumno(3, "Troy", "McLure", 2.6), new Alumno(4, "Edna", "Krabaples", 8.7)));

	@GetMapping("/alumnos")
	public List<Alumno> listAlumnos() {
		return alumnos;
	}

	@GetMapping("/alumnos/{id}")
	public Alumno findAlumno(@PathVariable int id) {
		Alumno alumnoEncontrado = null;
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id)
				alumnoEncontrado = alumno;
		}
		return alumnoEncontrado;
	}

	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		String msjString = "Alumno no encontrado";
		Alumno alumnoEncontrado = null;
		for (Alumno alumno : alumnos) {
			if (alumno.getId() == id) {
				alumnoEncontrado = alumno;
				msjString = "Alumno " + alumno.getNombre() + " Eliminado correctamente.";
			}
		}
		this.alumnos.remove(alumnoEncontrado);
		return msjString;
	}

	@PostMapping("/alumnos/crear")
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		alumno.setId(this.alumnos.size() + 1);
		this.alumnos.add(alumno);
		return alumno;
	}

	@PutMapping("/alumnos/actualizar/{id}")
	public List<Alumno> updateAlumno(@PathVariable int id,@RequestBody Alumno alumno) {
		for (int i = 0; i < this.alumnos.size(); i++) {
			if (id == this.alumnos.get(i).getId()) {
				alumno.setId(id);
				this.alumnos.set(i, alumno);
			}
		}
		return this.alumnos;
	}

}
