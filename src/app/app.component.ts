import {Component} from '@angular/core';
import {MercService} from './core/services/merc.service';
import {DbContext} from './core/services/db-context';
import {JsonDbContext} from './core/services/json-db-context';
import {WeaponService} from './core/services/weapon.service';
import {AbilityService} from './core/services/ability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MercService, WeaponService, AbilityService, {provide: DbContext, useClass: JsonDbContext}]
})
export class AppComponent {

}
