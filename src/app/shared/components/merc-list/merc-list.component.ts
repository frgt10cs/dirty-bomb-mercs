import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItem} from '../../models/ilist-item';
import {List} from '../../models/list';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-merc-list',
  templateUrl: './merc-list.component.html',
  styleUrls: ['./merc-list.component.css']
})
export class MercListComponent implements OnInit {

  @Input() list: List;

  constructor() { }

  ngOnInit(): void {

  }
}
