import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'idt-button',
  templateUrl: './uibutton.component.html',
  styleUrls: ['./uibutton.component.css']
})
export class UibuttonComponent {

  @Input() typeBt: 'default' | 'outline' | 'disabled' = 'default'

  @Input() text: string = 'Buy';

}
