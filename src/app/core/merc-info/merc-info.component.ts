import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';
import {Weapons} from '../../shared/models/weapon';
import {AbilityService} from '../services/ability.service';
import {WeaponService} from '../services/weapon.service';
import {Ability} from '../../shared/models/ability';

@Component({
  selector: 'app-merc-info',
  templateUrl: './merc-info.component.html',
  styleUrls: ['./merc-info.component.css']
})
export class MercInfoComponent implements OnInit {

  private _merc: Merc;
  @Input()
  set merc(value: Merc) {
    this.weapons = this.weaponService.getMercWeapons(value.id);
    this.abilities = this.abilityService.getMercAbilities(value.id);
    this._merc = value;
  }

  get merc(): Merc {
    return this._merc;
  }

  weapons: Weapons;
  abilities: Ability[];
  @Input() isEditable: boolean;

  constructor(private weaponService: WeaponService, private abilityService: AbilityService) {
  }

  ngOnInit(): void {

  }
}
