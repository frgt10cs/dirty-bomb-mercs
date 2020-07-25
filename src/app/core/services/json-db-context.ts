import {JsonRepository} from './json-repository';
import {Ability, Merc, Weapon} from '../../shared/models/merc';
import {Repository} from './repository';
import {DbContext} from './db-context';
import {MercWeapon} from '../../shared/models/MercWeapon';

// @ts-ignore
import {MercsJson} from '../../../assets/data/mercs.json';
// @ts-ignore
import {WeaponsJson} from '../../../assets/data/weapons.json';
// @ts-ignore
import {AbilitiesJson} from '../../../assets/data/abilities.json';
// @ts-ignore
import {MercWeapons} from '../../../assets/data/merc-weapons.json';



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
