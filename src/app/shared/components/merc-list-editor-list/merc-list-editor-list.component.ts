import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItem} from '../../models/list-item';

@Component({
  selector: 'app-merc-list-editor-list',
  templateUrl: './merc-list-editor-list.component.html',
  styleUrls: ['./merc-list-editor-list.component.css']
})
export class MercListEditorListComponent implements OnInit {

  @Input() list: ListItem[];
  @Input() title: string;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(id: number): void{
    this.remove.emit(id);
  }
}
