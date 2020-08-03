import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityJsonService} from '../services/json-implementations/ability-json.service';

@Component({
  selector: 'app-merc-info-ability-list',
  templateUrl: './merc-info-ability-list.component.html',
  styleUrls: ['./merc-info-ability-list.component.css']
})
export class MercInfoAbilityListComponent implements OnInit {

  abilities: Ability[];
  @Input() mercId: number;

  constructor(private abilityService: AbilityJsonService) {
  }

  ngOnInit(): void {
    this.abilities = this.abilityService.getMercAbilities(this.mercId);
  }

}
