import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityJsonService} from '../services/json-implementations/ability-json.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MercService} from '../services/interfaces/merc.service';
import {Merc} from '../../shared/models/merc';
import {List} from '../../shared/models/list';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  mercId: number;
  merc: Merc;
  abilities: Ability[];
  abilityList: List;

  constructor(private route: ActivatedRoute, private abilityService: AbilityJsonService,
              private location: Location, private mercService: MercService) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.abilities = this.abilityService.all();
    const mercAbilities = this.abilityService.getMercAbilities(this.mercId);
    this.abilityList = new List(null, mercAbilities, (name, item) => {
      switch (name) {
        case 'remove':
          this.abilityService.removeMercAbility(this.mercId, item.getId());
          break;
        case 'add':
          this.abilityService.addMercAbility(this.mercId, item.getId());
          break;
      }
    });
  }
}
