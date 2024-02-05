import { Component } from '@angular/core';
import { Todo } from './models/todo.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Cart';

  constructor() {
    this.todos.push(new Todo(0, 'Rice', false));
    this.todos.push(new Todo(1, 'Beans', false));
    this.todos.push(new Todo(2, 'Orange Juice', true));
    this.todos.push(new Todo(3, 'Meat', true));
  }
}
