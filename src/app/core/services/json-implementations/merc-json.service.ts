import {Merc} from '../../../shared/models/merc';
// @ts-ignore
import * as MercsJson from '../../../../assets/data/mercs.json';
import {MercService} from '../interfaces/merc.service';
import {Json} from '../../../shared/models/json';

export class MercJsonService implements MercService{
  mercs: Merc[];

  constructor() {
    this.mercs = Json.read(MercsJson.default, Merc);
  }

  getMercById(id: number): Merc {
    return this.mercs.find(merc => merc.id === id);
  }

  all = () => this.mercs;

  first = () => this.mercs[0];

  add(merc: Merc): void{

  }

  removeById(mercId: number): void{

  }

  remove(merc: Merc): void{

  }

  saveChanges(): void {
  }
}
