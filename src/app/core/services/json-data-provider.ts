import {Injectable} from '@angular/core';
import {DataProvider} from './data-provider';

import {Json} from '../../shared/models/json';

/*
* Works with data in array that uploaded from JSON
* Doesn't save changes, because it doesn't change JSON file, only array
* */

@Injectable({
  providedIn: 'root'
})
export class JsonDataProvider<T> extends DataProvider<T> {

  private data: T[];

  constructor(type: new() => T, jsonModule: any) {
    super();
    this.data = Json.read(jsonModule.default, type);
  }

  all(): T[] {
    return this.data;
  }

  add(entity: T): void {
    this.data.push(entity);
  }

  remove(entity: T): void {
    const index = this.data.indexOf(entity);
    this.data.splice(index, 1);
  }

  saveChanges(): void {
    // send request to backend
  }

  where(predicate: (obj: T) => boolean): T[] {
    return this.data.filter(predicate);
  }

  first(): T {
    return this.data[0];
  }

  firstWhere(predicate: (obj: T) => boolean): T {
    return this.data.find(predicate);
  }
}
