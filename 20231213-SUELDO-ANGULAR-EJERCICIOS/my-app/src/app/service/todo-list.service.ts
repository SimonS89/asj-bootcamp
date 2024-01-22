import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Task from '../model/Task';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}
  urlBase: string = 'http://localhost:8080/tareas';

  public getAllTasks(): Observable<Task[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Task[]>(this.urlBase, { headers });
  }

  public getById(id: number): Observable<Task> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Task>(this.urlBase + `/${id}`, { headers });
  }

  public createTask(task: Task): Observable<Task> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Task>(this.urlBase, task, { headers });
  }

  public updateTask(id: number, task: Task): Observable<Task> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<Task>(this.urlBase + `/${id}`, task, { headers });
  }

  public deleteTask(id: number): Observable<Task[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.delete<Task[]>(this.urlBase + `/${id}`, { headers });
  }
}
