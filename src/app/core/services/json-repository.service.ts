import {Inject, Injectable} from '@angular/core';
import {RepositoryService} from './repository.service';
// @ts-ignore
import jsonData from '../../../assets/appdata.json';

/*import {Json} from '../../shared/models/json';*/

@Injectable({
  providedIn: 'root'
})
export class JsonRepositoryService<T> extends RepositoryService<T> {

  private type: new() => T;
  private data: T[];

  constructor(@Inject('type') type: new () => T) {
    super();
    this.type = type;
    this.data = json.read(jsonData, type);
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
