import {Ability} from '../../../shared/models/ability';

export abstract class AbilityService {
  abstract getMercAbilities(mercId: number): Ability[];
}
