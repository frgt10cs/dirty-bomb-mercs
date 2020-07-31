import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityJsonService} from '../services/json-implementations/ability-json.service';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.css']
})
export class AbilityListComponent implements OnInit {

  abilities: Ability[];
  @Input() mercId: number;

  constructor(private abilityService: AbilityJsonService) {
  }

  ngOnInit(): void {
    this.abilities = this.abilityService.getMercAbilities(this.mercId);
  }

}
