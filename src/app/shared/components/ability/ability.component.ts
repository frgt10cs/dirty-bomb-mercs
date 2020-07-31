import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../models/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  @Input() ability: Ability;
  showAbilityDescription: boolean;

  constructor() {
    this.showAbilityDescription = false;
  }

  ngOnInit(): void {
  }

}
