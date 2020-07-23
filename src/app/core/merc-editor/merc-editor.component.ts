import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';

@Component({
  selector: 'app-merc-editor',
  templateUrl: './merc-editor.component.html',
  styleUrls: ['./merc-editor.component.css']
})
export class MercEditorComponent implements OnInit {

  constructor() {
  }

  @Input() selectedMerc: Merc;

  ngOnInit(): void {
  }

}
