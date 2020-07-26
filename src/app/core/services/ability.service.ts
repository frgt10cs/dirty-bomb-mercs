import {Injectable} from '@angular/core';
import {DbContext} from './db-context';
import {Ability} from '../../shared/models/merc';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  constructor(private context: DbContext) {
  }

  getMercAbilities(mercId: number): Ability[] {
    const abilitiesIds = this.context.mercAbilities
      .where(ma => ma.mercId === mercId)
      .map(a => a.id);
    return this.context.abilities.where(a => abilitiesIds.includes(a.id));
  }
}
