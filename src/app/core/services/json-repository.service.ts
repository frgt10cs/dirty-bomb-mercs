import {Injectable} from '@angular/core';
import {RepositoryService} from './repository.service';
// @ts-ignore
import jsonData from '../../../assets/appdata.json';

@Injectable({
  providedIn: 'root'
})
export class JsonRepositoryService<T> extends RepositoryService<T> {

  data: T[];

  constructor() {
    super();
    this.data = jsonData;
  }

  getAll(): T[] {
    return this.data;
  }

  add(entity: T): void {
    this.data.push(entity);
  }
}
