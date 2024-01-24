import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: any[] = [];
  public title: string = 'My tasks';

  constructor() {
    this.todos.push('Walk with dog');
    this.todos.push('Go to shop');
    this.todos.push('Cut hair');   
  }
}
