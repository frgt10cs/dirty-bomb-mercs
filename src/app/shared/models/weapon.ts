import {IListItem} from './ilist-item';

export class Weapon implements IListItem{
  id: number;
  imgUrl: string;
  name: string;

  getValue(): number | string {
    return this.name;
  }
}

export class Weapons {
  primaries: Weapon[];
  secondaries: Weapon[];
  melee: Weapon[];
}
