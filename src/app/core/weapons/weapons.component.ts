import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/merc.service';
import {WeaponService} from '../services/weapon.service';
import {Weapon, Weapons} from '../../shared/models/weapon';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  mercId: number;
  merc: Merc;
  weapons: Weapon[];
  mercWeapons: Weapons;

  constructor(private route: ActivatedRoute, private mercService: MercService,
              private weaponService: WeaponService) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.weapons = this.weaponService.getAll();
    this.mercWeapons = this.weaponService.getMercWeapons(this.mercId);
  }

  addPrimaryWeapon(weaponId: number) {
    alert(123);
    this.mercWeapons.primaries.push(this.weapons.find(w => w.id === weaponId));
  }

  addSecondaryWeapon(weaponId: number) {

  }

  addMeleeWeapon(weaponId: number) {

  }
}
