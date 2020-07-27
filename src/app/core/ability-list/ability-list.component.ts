import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/merc';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.css']
})
export class AbilityListComponent implements OnInit {

  @Input() ability: Ability;

  constructor() {
  }

  ngOnInit(): void {
  }

}
