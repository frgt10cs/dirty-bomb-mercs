import {DataProvider} from './data-provider';
import {Ability, Merc} from '../../shared/models/merc';
import {MercWeapon} from '../../shared/models/merc-weapon';
import {Weapon} from '../../shared/models/weapon';
import {MercAbility} from '../../shared/models/merc-ability';

export abstract class DbContext {
  mercs: DataProvider<Merc>;
  weapons: DataProvider<Weapon>;
  abilities: DataProvider<Ability>;
  mercWeapons: DataProvider<MercWeapon>;
  mercAbilities: DataProvider<MercAbility>;
}
