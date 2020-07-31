import {Merc} from '../../../shared/models/merc';
// @ts-ignore
import * as MercsJson from '../../../../assets/data/mercs.json';
import {MercService} from '../interfaces/merc.service';

export class MercJsonService implements MercService{
  mercs: Merc[];

  constructor() {
    this.mercs = MercsJson.default;
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
