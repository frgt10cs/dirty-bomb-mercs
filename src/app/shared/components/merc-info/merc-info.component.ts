import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../../models/merc';

@Component({
  selector: 'app-merc-info',
  templateUrl: './merc-info.component.html',
  styleUrls: ['./merc-info.component.css']
})
export class MercInfoComponent implements OnInit {

  @Input() info: Info;

  constructor() {
  }

  ngOnInit(): void {
  }

}
