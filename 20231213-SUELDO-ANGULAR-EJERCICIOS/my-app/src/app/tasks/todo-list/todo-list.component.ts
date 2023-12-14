import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  input_value = '';
  selected_option = 'all';
  todoList: any[] = [];
  todoFiltered: any[] = [];

  ngOnInit() {
    this.filteredTasks();
  }

  addTask() {
    let task = {
      text: this.input_value,
      isDeleted: false,
      date: new Date().toLocaleDateString('en-GB'),
      isFinished: false,
    };
    this.todoList.push(task);
    this.input_value = '';
  }

  deleteTask(i: number) {
    this.todoList[i].isDeleted = !this.todoList[i].isDeleted;
  }

  finishTask(i: number) {
    this.todoList[i].isFinished = !this.todoList[i].isFinished;
  }

  filteredTasks() {
    switch (this.selected_option) {
      case 'finished':
        this.todoFiltered = this.todoList.filter((task) => task.isFinished);
        break;
      case 'unfinished':
        this.todoFiltered = this.todoList.filter(
          (task) => !task.isFinished && !task.isDeleted
        );
        break;
      case 'all':
        this.todoFiltered = this.todoList;
        break;
      case 'deleted':
        this.todoFiltered = this.todoList.filter((task) => task.isDeleted);
        break;
      default:
        this.todoFiltered = this.todoList;
        break;
    }
  }
}
