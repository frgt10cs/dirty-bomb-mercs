import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/interfaces/merc.service';
import {WeaponJsonService} from '../services/json-implementations/weapon-json.service';
import {Weapon} from '../../shared/models/weapon';
import {List} from '../../shared/models/list';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  mercId: number;
  merc: Merc;
  weapons: Weapon[];
  primaryList: List;
  secondaryList: List;
  meleeList: List;

  constructor(private route: ActivatedRoute, private mercService: MercService,
              private weaponService: WeaponJsonService) {

  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.weapons = this.weaponService.getAll();
    const mercWeapons = this.weaponService.getMercWeapons(this.mercId);

    this.primaryList = new List('Primary', mercWeapons.primaries, (name, item) => {
      switch (name) {
        case 'remove':
          this.weaponService.removeMercWeapon(this.mercId, item.getId());
          break;
        case 'add':
          this.weaponService.addMercWeapon(this.mercId, item.getId(), 0);
          break;
      }
    });

    this.secondaryList = new List('Secondary', mercWeapons.secondaries, (name, item) => {
      switch (name) {
        case 'remove':
          this.weaponService.removeMercWeapon(this.mercId, item.getId());
          break;
        case 'add':
          this.weaponService.addMercWeapon(this.mercId, item.getId(), 1);
          break;
      }
    });

    this.meleeList = new List('Secondary', mercWeapons.melee, (name, item) => {
      switch (name) {
        case 'remove':
          this.weaponService.removeMercWeapon(this.mercId, item.getId());
          break;
        case 'add':
          this.weaponService.addMercWeapon(this.mercId, item.getId(), 2);
          break;
      }
    });
  }
}
