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
    this.todos.push(new Todo(0, 'Rice', false, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.paodeacucar.com%2Fproduto%2F41329%2Farroz-agulhinha-tipo-1-camil-pacote-5kg&psig=AOvVaw30CUjmgN3rmk6tr9jUxjL5&ust=1707321389050000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjM5PyJl4QDFQAAAAAdAAAAABAD', 1));
    this.todos.push(new Todo(1, 'Beans', false, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redemix.com.br%2F7897136400605feijao-branco-kicaldo-500g%2Fp&psig=AOvVaw05PEpSrQEr8tAvFT1-Ytrz&ust=1707324261532000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKi4sueUl4QDFQAAAAAdAAAAABAW', 0));
    this.todos.push(new Todo(2, 'Orange Juice', true,'https://naturalone.vteximg.com.br/arquivos/ids/157646-1000-1000/SUCO_DE_LARANJA_INTEGRAL_300ML_REFRIGERADO_-_NATURAL_ONE-01.jpg?v=638210531887200000', 0));
    this.todos.push(new Todo(3, 'Meat', true,'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCs7DM88WMdwijQOlWiPP8GrMqdq1iqjr-sTaKrQcf23oPLwJCfhptfZSQyPiKk75uYM8j2IjaqnXWUbpidZmflh5LGUV4Hrqte2nMON95E_qws-hsOLsVJwcl&usqp=CAE', 0));
  }
}

