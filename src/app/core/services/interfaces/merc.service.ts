import {Injectable} from '@angular/core';
import {Merc} from '../../../shared/models/merc';

@Injectable({
  providedIn: 'root'
})
export abstract class MercService {
  abstract getMercById(id: number): Merc;
  abstract saveChanges(): void;
  abstract all(): Merc[];
  abstract first(): Merc;
}
