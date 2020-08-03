import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';

import {Json} from '../../shared/models/json';

@Component({
  selector: 'app-merc-game-data',
  templateUrl: './merc-game-data.component.html',
  styleUrls: ['./merc-game-data.component.css']
})
export class MercGameDataComponent implements OnInit {

  @Input() merc: Merc;
  @Input() isEditable: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
