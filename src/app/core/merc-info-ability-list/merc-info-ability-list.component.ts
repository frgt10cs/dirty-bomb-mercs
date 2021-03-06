import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityJsonService} from '../services/json-implementations/ability-json.service';

@Component({
  selector: 'app-merc-info-ability-list',
  templateUrl: './merc-info-ability-list.component.html',
  styleUrls: ['./merc-info-ability-list.component.css']
})
export class MercInfoAbilityListComponent implements OnChanges {

  abilities: Ability[];
  @Input() mercId: number;

  constructor(private abilityService: AbilityJsonService) {
  }

  ngOnChanges(changes: SimpleChanges){
    this.abilities = this.abilityService.getMercAbilities(this.mercId);
  }
}
