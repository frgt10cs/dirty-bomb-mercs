import {Component, OnInit, Input} from '@angular/core';
import {Merc} from '../../models/merc';

@Component({
  selector: 'app-merc-card',
  templateUrl: './merc-card.component.html',
  styleUrls: ['./merc-card.component.css']
})
export class MercCardComponent implements OnInit {

  @Input() id: number;
  @Input() imgUrl: string;
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
