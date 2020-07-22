import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class RepositoryService<T> {

  abstract getAll(): T[];

  abstract add(entity: T): void;
}
