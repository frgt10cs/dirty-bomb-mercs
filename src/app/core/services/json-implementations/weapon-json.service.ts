import {Weapon, Weapons} from '../../../shared/models/weapon';
import {Injectable} from '@angular/core';
import {MercWeapon, WeaponType} from '../../../shared/models/merc-weapon';
import {WeaponService} from '../interfaces/weapon.service';

// @ts-ignore
import * as WeaponsJson from '../../../../assets/data/weapons.json';
// @ts-ignore
import * as MercWeaponsJson from '../../../../assets/data/merc-weapons.json';


@Injectable({
  providedIn: 'root'
})
export class WeaponJsonService implements WeaponService{
  weapons: Weapon[];
  mercWeapons: MercWeapon[];

  constructor() {
    this.weapons = WeaponsJson.default;
    this.mercWeapons = MercWeaponsJson.default;
  }

  getMercWeapons(mercId: number): Weapons {
    const weapons: Weapons = new Weapons();
    weapons.primaries = this.getMercWeaponsByType(mercId, WeaponType.primary);
    weapons.secondaries = this.getMercWeaponsByType(mercId, WeaponType.secondary);
    weapons.melee = this.getMercWeaponsByType(mercId, WeaponType.melee);
    return weapons;
  }

  getMercWeaponsByType(mercId: number, weaponType: WeaponType): Weapon[] {
    const weaponIds = this.mercWeapons
      .filter(mw => mw.mercId === mercId && mw.type === weaponType)
      .map((mw) => mw.weaponId);
    return this.weapons.filter(w => weaponIds.includes(w.id));
  }

  getAll = () => this.weapons;

  addMercWeapon(mercId: number, weaponId: number, type: WeaponType): void {
    this.mercWeapons.push({mercId, weaponId, type});
  }

  removeMercWeapon(mercId: number, weaponId: number): void{
    const mercWeaponId = this.mercWeapons
      .findIndex(mw => mw.mercId === mercId && mw.weaponId === weaponId);
    if (mercWeaponId !== -1) {
      this.mercWeapons.splice(mercWeaponId, 1);
    }
  }
}
