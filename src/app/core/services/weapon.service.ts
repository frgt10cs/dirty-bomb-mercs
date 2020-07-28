import {Weapon, Weapons} from '../../shared/models/weapon';
import {Injectable} from '@angular/core';
import {DbContext} from './db-context';
import {WeaponType} from '../../shared/models/merc-weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  constructor(private context: DbContext) {

  }

  getMercWeapons(mercId: number): Weapons {
    const weapons: Weapons = new Weapons();
    weapons.primaries = this.getMercWeaponsByType(mercId, WeaponType.primary);
    weapons.secondaries = this.getMercWeaponsByType(mercId, WeaponType.secondary);
    weapons.melee = this.getMercWeaponsByType(mercId, WeaponType.melee);
    return weapons;
  }

  getMercWeaponsByType(mercId: number, weaponType: WeaponType): Weapon[] {
    const weaponIds = this.context.mercWeapons
      .where(mw => mw.mercId === mercId && mw.type === weaponType)
      .map((mw) => mw.weaponId);
    return this.context.weapons.where(w => weaponIds.includes(w.id));
  }

  getAll = () => this.context.weapons.all();
}
