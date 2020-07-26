import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';

@Component({
  selector: 'app-merc-viewer',
  templateUrl: './merc-viewer.component.html',
  styleUrls: ['./merc-viewer.component.css']
})
export class MercViewerComponent implements OnInit {

  @Input() merc: Merc;
  isEditable: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
