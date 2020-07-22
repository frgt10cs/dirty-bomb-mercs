import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryRepositoryService<T> extends RepositoryService<T> {

  data: T[];

  constructor() {
    super();
    this.data = [];
  }

  getAll(): T[] {
    return this.data;
  }
  add(entity: T): void {
    this.data.push(entity);
  }
}
