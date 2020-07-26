import {Repository} from './repository';
import {Ability, Merc} from '../../shared/models/merc';
import {MercWeapon} from '../../shared/models/merc-weapon';
import {Weapon} from '../../shared/models/weapon';
import {MercAbility} from '../../shared/models/merc-ability';

export abstract class DbContext {
  mercs: Repository<Merc>;
  weapons: Repository<Weapon>;
  abilities: Repository<Ability>;
  mercWeapons: Repository<MercWeapon>;
  mercAbilities: Repository<MercAbility>;
}
