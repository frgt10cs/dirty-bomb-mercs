import {Weapon} from '../../shared/models/merc';
import {Injectable} from '@angular/core';
import {DbContext} from './db-context';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  constructor(private context: DbContext) {

  }

  getMercWeapons(mercId: number): Weapon[] {
    const ids = this.context.mercWeapons.where(rel =>
      rel.userId === mercId).map(rel => rel.weaponId);
    return this.context.weapons.where(weapon => ids.indexOf(weapon.id) !== -1);
  }
}
