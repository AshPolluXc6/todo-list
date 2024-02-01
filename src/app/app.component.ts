import { Component } from '@angular/core';
import { Todo } from './models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'My tasks';

  constructor() {
    this.todos.push(new Todo(1, 'Walk arround', false));
    this.todos.push(new Todo(2, 'Go to market', false));
    this.todos.push(new Todo(3, 'Buy new shirt', true));
    this.todos.push(new Todo(4, 'Buy new desk', true));
  }
}
