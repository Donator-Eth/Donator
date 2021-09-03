import { Component, Input } from '@angular/core';
import { Request } from "../../models/Request";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input()
  request!: Request;

  isExpanded: boolean = false;

  constructor() { }

}
