import {Component, Input, OnInit} from '@angular/core';
import {MercDataGroup} from '../../models/merc-data-group';
import {Merc} from '../../models/merc';

@Component({
  selector: 'app-merc-data-group',
  templateUrl: './merc-data-group.component.html',
  styleUrls: ['./merc-data-group.component.css']
})
export class MercDataGroupComponent implements OnInit {

  @Input() dataGroup: MercDataGroup;
  @Input() editable: boolean;

  constructor() {
    this.editable = false;
  }

  ngOnInit(): void {

  }



}
