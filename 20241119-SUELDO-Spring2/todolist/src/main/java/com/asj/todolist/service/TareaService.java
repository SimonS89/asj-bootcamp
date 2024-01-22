package com.asj.todolist.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.todolist.model.Tarea;
import com.asj.todolist.repository.TareaRepository;

@Service
public class TareaService {

	private final TareaRepository tareaRepository;

	public TareaService(TareaRepository tareaRepository) {
		this.tareaRepository = tareaRepository;
	}

	public List<Tarea> findAll() {
		return tareaRepository.findAll();
	}

	public Tarea findById(int id) {
		return tareaRepository.findById(id).orElseThrow(() -> new RuntimeException("asd"));
	}

	public Tarea create(Tarea tarea) {
		return tareaRepository.save(tarea);
	}

	public Tarea updateTarea(int id, Tarea tarea) {
		Tarea tareaEncontrada = findById(id);if (tareaEncontrada != null)
			return tareaRepository.save(tarea);
		return null;
	}

	public List<Tarea> deleteTareaById(int id) {
		tareaRepository.deleteById(id);
		return findAll();
	}
}
