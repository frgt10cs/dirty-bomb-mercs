import {Component} from '@angular/core';
import {Ability, Merc} from './shared/models/merc';
import {MercService} from './core/services/merc.service';
import {DbContext} from './core/services/db-context';
import {JsonDbContext} from './core/services/json-db-context';
import {WeaponService} from './core/services/weapon.service';
import {Weapons} from './shared/models/weapon';
import {AbilityService} from './core/services/ability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MercService, WeaponService, AbilityService, {provide: DbContext, useClass: JsonDbContext}]
})
export class AppComponent {

  private _selectedMerc: Merc;
  set selectedMerc(value: Merc) {
    if (value === null) {
      return;
    }
    this._selectedMerc = value;
  }

  get selectedMerc(): Merc {
    return this._selectedMerc;
  }

  isEditable: boolean;

  constructor(public mercService: MercService) {
    this.selectedMerc = this.mercService.first();
  }

  selectMercById(id: number): void {
    this.selectedMerc = this.mercService.getMercById(id);
  }
}
