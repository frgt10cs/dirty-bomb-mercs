import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-merc-info-part',
  templateUrl: './merc-info-part.component.html',
  styleUrls: ['./merc-info-part.component.css']
})
export class MercInfoPartComponent implements OnInit {

  @Input() isEditable: boolean;
  @Input() name: string;
  @Input() data: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
