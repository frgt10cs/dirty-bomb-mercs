import {Inject, Injectable} from '@angular/core';
import {RepositoryService} from './repository.service';
// @ts-ignore
import jsonData from '../../../assets/appdata.json';
import {Json} from '../../shared/models/json';

@Injectable({
  providedIn: 'root'
})
export class JsonRepositoryService<T> extends RepositoryService<T> {

  data: T[];

  constructor(@Inject('type') private type: new () => T) {
    super();
    this.data = Json.read(jsonData, type);
  }

  getAll(): T[] {
    return this.data;
  }

  add(entity: T): void {
    this.data.push(entity);
  }
}
