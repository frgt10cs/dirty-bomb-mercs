import {Repository} from './repository';
import {Ability, Merc} from '../../shared/models/merc';
import {MercWeapon} from '../../shared/models/MercWeapon';
import {Weapon} from '../../shared/models/weapon';

export abstract class DbContext {
  mercs: Repository<Merc>;
  weapons: Repository<Weapon>;
  abilities: Repository<Ability>;
  mercWeapons: Repository<MercWeapon>;
}
