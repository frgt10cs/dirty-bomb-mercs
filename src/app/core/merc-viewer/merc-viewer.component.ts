import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Merc} from '../../shared/models/merc';

@Component({
  selector: 'app-merc-viewer',
  templateUrl: './merc-viewer.component.html',
  styleUrls: ['./merc-viewer.component.css']
})
export class MercViewerComponent implements OnInit {

  @Input() selectedMerc: Merc;
  isEditable: boolean;

  constructor() {
    this.isEditable = false;
  }

  ngOnInit(): void {
  }

  saveMerc(): void {
    this.isEditable = false;
  }
}
