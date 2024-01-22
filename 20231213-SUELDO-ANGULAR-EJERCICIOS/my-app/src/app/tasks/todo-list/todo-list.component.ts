import { Component, OnInit } from '@angular/core';
import Task from 'src/app/model/Task';
import { TodoListService } from 'src/app/service/todo-list.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  input_value = '';
  selected_option = 'all';
  todoFiltered: Task[] = [];
  todoList: Task[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.loadAllTasks();
  }

  addTask() {
    let task: Task = {
      text: this.input_value,
      date: new Date(),
      finished: false,
    };
    this.input_value = '';
    this.todoListService.createTask(task).subscribe((res) => {
      alert(`Tarea ID : ${res.id} Creada correctamente.`);
      this.loadAllTasks();
    });
  }

  loadAllTasks() {
    this.todoListService.getAllTasks().subscribe((tasks: Task[]) => {
      this.todoList = tasks;
      this.filteredTasks();
    });
  }

  finishTask(task: Task) {
    task.finished = !task.finished;
    this.todoListService.updateTask(task.id!, task).subscribe((res) => {
      this.loadAllTasks();
    });
  }

  deleteTask(id: number) {
    this.todoListService.deleteTask(id).subscribe((res) => {
      this.loadAllTasks();
    });
  }

  filteredTasks() {
    switch (this.selected_option) {
      case 'finished':
        this.todoFiltered = this.todoList.filter((task) => task.finished);
        break;
      case 'unfinished':
        this.todoFiltered = this.todoList.filter((task) => !task.finished);
        break;
      default:
        this.todoFiltered = [...this.todoList];
        break;
    }
  }
}
