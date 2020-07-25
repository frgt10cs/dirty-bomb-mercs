import {Repository} from './repository';
import {Ability, Merc, Weapon} from '../../shared/models/merc';
import {MercWeapon} from '../../shared/models/MercWeapon';

export abstract class DbContext {
  mercs: Repository<Merc>;
  weapons: Repository<Weapon>;
  abilities: Repository<Ability>;
  mercWeapons: Repository<MercWeapon>;
}
