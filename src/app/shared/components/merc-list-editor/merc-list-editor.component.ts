import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Merc} from '../../models/merc';
import {Location} from '@angular/common';

@Component({
  selector: 'app-merc-list-editor',
  templateUrl: './merc-list-editor.component.html',
  styleUrls: ['./merc-list-editor.component.css']
})
export class MercListEditorComponent implements OnInit {

  @Input() title: string;
  @Input() merc: Merc;
  @Input() list: number[] | string[];
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit();
  }

  goBack(): void {
    this.location.back();
  }

  saveList(): void{

  }
}
