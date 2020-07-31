import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/interfaces/merc.service';
import {WeaponJsonService} from '../services/json-implementations/weapon-json.service';
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
              private weaponService: WeaponJsonService) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.weapons = this.weaponService.getAll();
    this.mercWeapons = this.weaponService.getMercWeapons(this.mercId);
  }

  addPrimaryWeapon(weaponId: number): void {
    if (this.mercWeapons.primaries.find(w => w.id === weaponId) == null) {
      this.mercWeapons.primaries.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 0);
    }
  }

  removePrimaryWeapon(weaponId: number): void {
    this.weaponService.removeMercWeapon(this.mercId, weaponId);
    const index = this.mercWeapons.primaries.findIndex(w => w.id === weaponId);
    if (index !== -1) {
      this.mercWeapons.primaries.splice(index, 1);
    }
  }

  addSecondaryWeapon(weaponId: number): void {
    if (this.mercWeapons.secondaries.find(w => w.id === weaponId) == null) {
      this.mercWeapons.secondaries.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 1);
    }
  }

  removeSecondaryWeapon(weaponId: number): void {
    this.weaponService.removeMercWeapon(this.mercId, weaponId);
    const index = this.mercWeapons.secondaries.findIndex(w => w.id === weaponId);
    if (index !== -1) {
      this.mercWeapons.secondaries.splice(index, 1);
    }
  }

  addMeleeWeapon(weaponId: number): void {
    if (this.mercWeapons.melee.find(w => w.id === weaponId) == null) {
      this.mercWeapons.melee.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 2);
    }
  }

  removeMeleeWeapon(weaponId: number): void {
    this.weaponService.removeMercWeapon(this.mercId, weaponId);
    const index = this.mercWeapons.melee.findIndex(w => w.id === weaponId);
    if (index !== -1) {
      this.mercWeapons.melee.splice(index, 1);
    }
  }

  saveMercWeapons(): void {

  }
}
