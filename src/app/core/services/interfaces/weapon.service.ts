import {Weapon, Weapons} from '../../../shared/models/weapon';
import {WeaponType} from '../../../shared/models/merc-weapon';

export abstract class WeaponService {
  abstract getMercWeapons(mercId: number): Weapons;
  abstract getMercWeaponsByType(mercId: number, weaponType: WeaponType): Weapon[];
  abstract getAll(): Weapon[];
  abstract addMercWeapon(mercId: number, weaponId: number, type: WeaponType): void;
  abstract removeMercWeapon(mercId: number, weaponId: number): void;
}
