package com.asj.todolist.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.todolist.model.Tarea;
import com.asj.todolist.service.TareaService;

@RestController
@RequestMapping("/tareas")
@CrossOrigin()
public class TareaController {
	
	private final TareaService tareaService;
	
	public TareaController(TareaService tareaService) {
		this.tareaService = tareaService;
	}

	@GetMapping()
	public ResponseEntity<List<Tarea>> getTareas() {
		return ResponseEntity.status(HttpStatus.OK).body(tareaService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Tarea> getTareaById(@PathVariable int id) {
		return ResponseEntity.status(HttpStatus.OK).body(tareaService.findById(id));
	}

	@PostMapping()
	public  ResponseEntity<Tarea> createTarea(@RequestBody Tarea tarea) {
		return ResponseEntity.status(HttpStatus.CREATED).body(tareaService.create(tarea));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Tarea> updateTarea(@PathVariable int id, @RequestBody Tarea tarea) {
		return ResponseEntity.status(HttpStatus.OK).body(tareaService.updateTarea(id,tarea));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<List<Tarea>> deleteTarea(@PathVariable int id) {
		tareaService.deleteTareaById(id);
		return ResponseEntity.status(HttpStatus.OK).body(tareaService.deleteTareaById(id));
	}
}
