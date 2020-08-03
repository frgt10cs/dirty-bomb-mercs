import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ability} from '../../models/ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  @Input() ability: Ability;
  @Output() addAbility: EventEmitter<Ability> = new EventEmitter<Ability>();
  showAbilityDescription: boolean;

  constructor() {
    this.showAbilityDescription = false;
  }

  ngOnInit(): void {
  }

  addMercAbility(): void{
    this.addAbility.emit(this.ability);
  }
}
