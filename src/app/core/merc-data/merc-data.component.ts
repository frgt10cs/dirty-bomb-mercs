import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';

@Component({
  selector: 'app-merc-data',
  templateUrl: './merc-data.component.html',
  styleUrls: ['./merc-data.component.css']
})
export class MercDataComponent implements OnInit {

  @Input() selectedMerc: Merc;
  @Input() isEditable: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
