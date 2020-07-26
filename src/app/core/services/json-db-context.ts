import {JsonRepository} from './json-repository';
import {Ability, Merc} from '../../shared/models/merc';
import {Repository} from './repository';
import {DbContext} from './db-context';
import {MercWeapon} from '../../shared/models/merc-weapon';
import {Injectable} from '@angular/core';
import {Weapon} from '../../shared/models/weapon';
import {MercAbility} from '../../shared/models/merc-ability';

// @ts-ignore
import * as MercsJson from '../../../assets/data/mercs.json';
// @ts-ignore
import * as WeaponsJson from '../../../assets/data/weapons.json';
// @ts-ignore
import * as AbilitiesJson from '../../../assets/data/merc-abilities.json';
// @ts-ignore
import * as MercWeapons from '../../../assets/data/merc-weapons.json';
// @ts-ignore
import * as MercAbilities from '../../../assets/data/merc-abilities.json';


@Injectable({
  providedIn: 'root'
})
export class JsonDbContext extends DbContext {

  constructor() {
    super();
    this.mercs = new JsonRepository<Merc>(Merc, MercsJson);
    this.weapons = new JsonRepository<Weapon>(Weapon, WeaponsJson);
    this.abilities = new JsonRepository<Ability>(Ability, AbilitiesJson);
    this.mercWeapons = new JsonRepository<MercWeapon>(MercWeapon, MercWeapons);
    this.mercAbilities = new JsonRepository<MercAbility>(MercAbility, MercAbilities);
  }
}
