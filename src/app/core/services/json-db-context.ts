import {JsonDataProvider} from './json-data-provider';
import {Merc} from '../../shared/models/merc';
import {DbContext} from './db-context';
import {MercWeapon} from '../../shared/models/merc-weapon';
import {Injectable} from '@angular/core';
import {Weapon} from '../../shared/models/weapon';
import {MercAbility} from '../../shared/models/merc-ability';
import {Ability} from '../../shared/models/ability';

// @ts-ignore
import * as MercsJson from '../../../assets/data/mercs.json';
// @ts-ignore
import * as WeaponsJson from '../../../assets/data/weapons.json';
// @ts-ignore
import * as AbilitiesJson from '../../../assets/data/abilities.json';
// @ts-ignore
import * as MercWeapons from '../../../assets/data/merc-weapons.json';
// @ts-ignore
import * as MercAbilitiesJson from '../../../assets/data/merc-abilities.json';


@Injectable({
  providedIn: 'root'
})
export class JsonDbContext extends DbContext {

  constructor() {
    super();
    this.mercs = new JsonDataProvider<Merc>(Merc, MercsJson);
    this.weapons = new JsonDataProvider<Weapon>(Weapon, WeaponsJson);
    this.abilities = new JsonDataProvider<Ability>(Ability, AbilitiesJson);
    this.mercWeapons = new JsonDataProvider<MercWeapon>(MercWeapon, MercWeapons);
    this.mercAbilities = new JsonDataProvider<MercAbility>(MercAbility, MercAbilitiesJson);
  }
}
