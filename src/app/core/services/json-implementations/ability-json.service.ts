import {Injectable} from '@angular/core';
import {Ability} from '../../../shared/models/ability';
import {AbilityService} from '../interfaces/ability.service';
import {MercAbility} from '../../../shared/models/merc-ability';

// @ts-ignore
import * as MercAbilitiesJson from '../../../../assets/data/merc-abilities.json';

// @ts-ignore
import * as AbilitiesJson from '../../../../assets/data/abilities.json';
import {Json} from '../../../shared/models/json';

@Injectable({
  providedIn: 'root'
})
export class AbilityJsonService implements AbilityService {
  abilities: Ability[];
  mercAbilities: MercAbility[];

  constructor() {
    this.abilities = Json.read(AbilitiesJson.default, Ability);
    this.mercAbilities = Json.read(MercAbilitiesJson.default, MercAbility);
  }

  all = () => this.abilities;

  addMercAbility(mercId: number, abilityId: number): void {
    const mercAbility = new MercAbility();
    mercAbility.mercId = mercId;
    mercAbility.abilityId = abilityId;
    this.mercAbilities.push(mercAbility);
  }

  getMercAbilities(mercId: number): Ability[] {
    const abilitiesIds = this.mercAbilities
      .filter(ma => ma.mercId === mercId)
      .map(a => a.id);
    return this.abilities.filter(a => abilitiesIds.includes(a.id));
  }

  removeMercAbility(mercId: number, abilityId: number): void {
    const index = this.mercAbilities
      .findIndex(ma => ma.abilityId === abilityId && ma.mercId === mercId);
    if (index !== -1) {
      this.mercAbilities.splice(index, 1);
    }
  }
}
