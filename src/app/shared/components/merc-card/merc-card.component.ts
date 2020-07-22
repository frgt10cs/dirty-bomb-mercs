import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-merc-card',
  templateUrl: './merc-card.component.html',
  styleUrls: ['./merc-card.component.css']
})
export class MercCardComponent implements OnInit {

  @Input() imgUrl:string;
  @Input() name:string;

  constructor() { }

  ngOnInit(): void {
  }

}
