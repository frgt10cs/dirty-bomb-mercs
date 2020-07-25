import {JsonRepository} from './json-repository';
import {Ability, Merc} from '../../shared/models/merc';
import {Repository} from './repository';
import {DbContext} from './db-context';
import {MercWeapon} from '../../shared/models/MercWeapon';

// @ts-ignore
import * as MercsJson from '../../../assets/data/mercs.json';
// @ts-ignore
import * as WeaponsJson from '../../../assets/data/weapons.json';
// @ts-ignore
import * as AbilitiesJson from '../../../assets/data/merc-abilities.json';
// @ts-ignore
import * as MercWeapons from '../../../assets/data/merc-weapons.json';
import {Injectable} from '@angular/core';
import {Weapon} from '../../shared/models/weapon';


@Injectable({
  providedIn: 'root'
})
export class JsonDbContext extends DbContext {
  mercs: Repository<Merc>;
  weapons: Repository<Weapon>;
  abilities: Repository<Ability>;
  mercWeapons: Repository<MercWeapon>;

  constructor() {
    super();
    this.mercs = new JsonRepository<Merc>(Merc, MercsJson);
    this.weapons = new JsonRepository<Weapon>(Weapon, WeaponsJson);
    this.abilities = new JsonRepository<Ability>(Ability, AbilitiesJson);
    this.mercWeapons = new JsonRepository<MercWeapon>(MercWeapon, MercWeapons);
  }
}
