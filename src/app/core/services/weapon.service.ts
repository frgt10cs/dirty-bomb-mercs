import {Weapon} from '../../shared/models/merc';
import {RepositoryService} from './repository.service';
import {MercWeapon} from '../../shared/models/MercWeapon';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  constructor(private weaponRepository: RepositoryService<Weapon>,
              private relationsRepository: RepositoryService<MercWeapon>) {

  }

  getMercWeapons(mercId: number): Weapon[] {
    const ids = this.relationsRepository.where(rel =>
      rel.userId === mercId).map(rel => rel.weaponId);
    return this.weaponRepository.where(weapon => ids.indexOf(weapon.id) !== -1);
  }
}
