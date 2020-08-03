import {IListItem} from './ilist-item';

export class List {
  title: string;
  items: IListItem[];
  onChange: (name: string, obj: IListItem) => void;

  constructor(title: string, items: IListItem[], onChange: (name: string, obj: IListItem) => void) {
    this.title = title;
    this.items = items;
    this.onChange = onChange;
  }

  add(item: IListItem): void {
    if (this.items.findIndex(i => i.getId() === item.getId()) === -1) {
      this.items.push(item);
      this.onChange('add', item);
    }
  }

  remove(item: IListItem): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.onChange('remove', item);
    }
  }
}
