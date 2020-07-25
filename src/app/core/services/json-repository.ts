import {Injectable} from '@angular/core';
import {Repository} from './repository';

import {Json} from '../../shared/models/json';

@Injectable({
  providedIn: 'root'
})
export class JsonRepository<T> extends Repository<T> {

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
