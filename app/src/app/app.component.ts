import {
  Component,
  OnInit
} from '@angular/core';
import {
  AppService,
  Todo
} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  todos: Todo[];

  title = '';

  constructor(
    private appService: AppService,
  ) {}

  ngOnInit() {
    this.appService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(title: string) {
    return this.appService.addTodo(title).subscribe(todo => {
      this.title = '';
      this.todos.push(todo);
    });
  }

  removeTodo(todo: Todo) {
    return this.appService.removeTodo(todo.id).subscribe(resTodo => {
      // todo remove todo from todos
    });
  }

  toggleTodo(todo: Todo) {
    return this.appService.toggleTodo(todo.id, !todo.completed).subscribe(resTodo => {
      // todo update todo in todos
    });
  }
}
