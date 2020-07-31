import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityService} from '../services/ability.service';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.css']
})
export class AbilityListComponent implements OnInit {

  abilities: Ability[];
  @Input() mercId: number;

  constructor(private abilityService: AbilityService) {
  }

  ngOnInit(): void {
    this.abilities = this.abilityService.getMercAbilities(this.mercId);
  }

}
