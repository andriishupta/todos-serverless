import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAllTodos() {
    return this.http.get<Todo[]>('/todo');
  }

  addTodo(title: string) {
    return this.http.post<Todo>('/todo', { title });
  }

  removeTodo(id: number) {
    return this.http.delete(`/todo/${id}`);
  }

  toggleTodo(id: number, completed: boolean) {
    return this.http.put(`/todo/${id}`, { completed });
  }
}

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

const todos: Todo[] = [
  {
    id: 0,
    title: 'todo 1',
  },
  {
    id: 1,
    title: 'todo 2',
  },
  {
    id: 2,
    title: 'todo 3',
    completed: true,
  }
];
