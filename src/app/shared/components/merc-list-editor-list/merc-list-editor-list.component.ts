import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IListItem} from '../../models/ilist-item';
import {List} from '../../models/list';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-merc-list-editor-list',
  templateUrl: './merc-list-editor-list.component.html',
  styleUrls: ['./merc-list-editor-list.component.css']
})
export class MercListEditorListComponent implements OnInit {

  @Input() list: List;
  @Output() remove: EventEmitter<IListItem> = new EventEmitter<IListItem>();

  constructor() { }

  ngOnInit(): void {

  }

  removeItem(item: IListItem): void{
    this.remove.emit(item);
  }
}
