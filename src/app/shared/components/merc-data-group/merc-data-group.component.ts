import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-merc-data-group',
  templateUrl: './merc-data-group.component.html',
  styleUrls: ['./merc-data-group.component.css']
})
export class MercDataGroupComponent implements OnInit {

  @Input() name: string;

  constructor() {

  }

  ngOnInit(): void {

  }
}
