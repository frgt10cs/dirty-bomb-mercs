import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class Repository<T> {

  abstract first(): T;

  abstract firstWhere(predicate: (obj: T) => boolean): T;

  abstract where(predicate: (obj: T) => boolean): T[];

  abstract all(): T[];

  abstract add(entity: T): void;

  abstract remove(entity: T): void;

  abstract saveChanges(): void;
}
