import {Component} from '@angular/core';
import {WeaponJsonService} from './core/services/json-implementations/weapon-json.service';
import {AbilityJsonService} from './core/services/json-implementations/ability-json.service';
import {MercJsonService} from './core/services/json-implementations/merc-json.service';
import {MercService} from './core/services/interfaces/merc.service';
import {WeaponService} from './core/services/interfaces/weapon.service';
import {AbilityService} from './core/services/interfaces/ability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: MercService, useClass: MercJsonService},
    {provide: WeaponService, useClass: WeaponJsonService},
    {provide: AbilityService, useClass: AbilityJsonService}]
})
export class AppComponent {

}
