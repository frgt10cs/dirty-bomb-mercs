import {List} from '../models/list';

declare global {
  export interface Array<T> {
    asList(title: string): List;
  }
}

Array.prototype.asList = <T>(title: string) => {
  const list: List = new List();
  list.title = title;
  this.forEach((item) => {
    list.items.push(item);
  });
  return list;
};
