import {Component, Input, OnInit} from '@angular/core';
import {MercData} from '../../models/merc-data';

@Component({
  selector: 'app-merc-info-part',
  templateUrl: './merc-info-part.component.html',
  styleUrls: ['./merc-info-part.component.css']
})
export class MercInfoPartComponent implements OnInit {

  @Input() name: string;
  @Input() data: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
