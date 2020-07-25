import {Weapon} from '../../shared/models/weapon';
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
      rel.mercId === mercId).map(rel => rel.weaponId);
    return this.context.weapons.where(weapon => ids.indexOf(weapon.id) !== -1);
  }
}
