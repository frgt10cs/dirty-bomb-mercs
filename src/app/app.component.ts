import {Component, Output} from '@angular/core';
import {MercCard} from './shared/models/merc-card';
import {RepositoryService} from './core/services/repository.service';
import {Merc, Weapon} from './shared/models/merc';
import {JsonRepositoryService} from './core/services/json-repository.service';
import {WeaponService} from './core/services/weapon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: 'type', useValue: Merc}, {provide: RepositoryService, useClass: JsonRepositoryService}]
})
export class AppComponent {

  selectedMerc: Merc;

  constructor(public mercRepository: RepositoryService<Merc>, public weaponService: WeaponService) {
    this.selectedMerc = this.mercRepository.first();
  }

  selectMercById(id: number): void {
    this.selectedMerc = this.mercRepository.firstWhere(merc=>merc.id==id));
  }
}
