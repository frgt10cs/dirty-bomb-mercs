import {Injectable} from '@angular/core';
import {RepositoryService} from './repository.service';
import {Merc} from '../../shared/models/merc';
import {WeaponService} from './weapon.service';

@Injectable({
  providedIn: 'root'
})
export class MercService {

  constructor(private repository: RepositoryService<Merc>, private weaponService: WeaponService) {
  }

  getMercById(id: number): Merc {
    return this.repository.firstWhere(merc => merc.id === id);
  }

  all = () => this.repository.all();

  first = () => this.repository.first();
}
