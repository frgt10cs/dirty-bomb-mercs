import {Injectable} from '@angular/core';
import {Ability} from '../../../shared/models/ability';
import {AbilityService} from '../interfaces/ability.service';
import {MercAbility} from '../../../shared/models/merc-ability';

// @ts-ignore
import * as MercAbilitiesJson from '../../../../assets/data/merc-abilities.json';

// @ts-ignore
import * as AbilitiesJson from '../../../../assets/data/abilities.json';

@Injectable({
  providedIn: 'root'
})
export class AbilityJsonService implements AbilityService {
  abilities: Ability[];
  mercAbilities: MercAbility[];

  constructor() {
    this.abilities = AbilitiesJson.default;
    this.mercAbilities = MercAbilitiesJson.default;
  }

  getMercAbilities(mercId: number): Ability[] {
    const abilitiesIds = this.mercAbilities
      .filter(ma => ma.mercId === mercId)
      .map(a => a.id);
    return this.abilities.filter(a => abilitiesIds.includes(a.id));
  }
}
