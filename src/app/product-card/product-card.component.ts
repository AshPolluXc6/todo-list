import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'idt-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent { 

  @Input() typeCard: 'default' | 'promotion'  = 'default';
}
