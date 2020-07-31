import {Component, Input, OnInit} from '@angular/core';
import {Ability} from '../../shared/models/ability';
import {AbilityJsonService} from '../services/json-implementations/ability-json.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MercService} from '../services/interfaces/merc.service';
import {Merc} from '../../shared/models/merc';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  mercId: number;
  merc: Merc;
  abilities: Ability[];

  constructor(private route: ActivatedRoute, private abilityService: AbilityJsonService,
              private location: Location, private mercService: MercService) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.abilities = this.abilityService.getMercAbilities(this.mercId);
  }
}
