package com.asj.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.todolist.model.Tarea;

public interface TareaRepository extends JpaRepository<Tarea,Integer>{

}
