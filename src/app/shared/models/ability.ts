import {IListItem} from './ilist-item';

export class Ability implements IListItem{
  id: number;
  name: string;
  description: string;
  imgUrl: string;

  getValue(): number | string {
    return this.name;
  }
}
