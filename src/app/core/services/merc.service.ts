import {Injectable} from '@angular/core';
import {Merc} from '../../shared/models/merc';
import {WeaponService} from './weapon.service';
import {DbContext} from './db-context';

@Injectable({
  providedIn: 'root'
})
export class MercService {

  constructor(private context: DbContext) {
  }

  getMercById(id: number): Merc {
    return this.context.mercs.firstWhere(merc => merc.id === id);
  }

  saveChanges(): void{
    this.context.mercs.saveChanges();
  }

  all = () => this.context.mercs.all();

  first = () => this.context.mercs.first();
}
