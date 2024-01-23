package com.asj.todolist.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tareas")
public class Tarea {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String text;
	private LocalDate date;
	private boolean isFinished;

	public Tarea() {
	}

	public Tarea(int id, String text, LocalDate date, boolean isFinished) {
		this.id = id;
		this.text = text;
		this.date = date;
		this.isFinished = isFinished;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public boolean isFinished() {
		return isFinished;
	}

	public void setFinished(boolean isFinished) {
		this.isFinished = isFinished;
	}

	

}
