import {Component, Input, OnInit} from '@angular/core';
import {MercDataGroup} from '../../models/merc-data-group';

@Component({
  selector: 'app-merc-data-group',
  templateUrl: './merc-data-group.component.html',
  styleUrls: ['./merc-data-group.component.css']
})
export class MercDataGroupComponent implements OnInit {

  @Input() dataGroup: MercDataGroup;

  constructor() {

  }

  ngOnInit(): void {

  }

}
