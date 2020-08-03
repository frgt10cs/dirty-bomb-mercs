import {Ability} from '../../../shared/models/ability';

export abstract class AbilityService {
  abstract getMercAbilities(mercId: number): Ability[];

  abstract removeMercAbility(mercId: number, abilityId: number): void;

  abstract addMercAbility(mercId: number, abilityId: number): void;
}
