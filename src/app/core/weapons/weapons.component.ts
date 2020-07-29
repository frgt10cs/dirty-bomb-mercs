import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/merc.service';
import {WeaponService} from '../services/weapon.service';
import {Weapon, Weapons} from '../../shared/models/weapon';
import {Location} from '@angular/common';

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
              private weaponService: WeaponService, private location: Location) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.weapons = this.weaponService.getAll();
    this.mercWeapons = this.weaponService.getMercWeapons(this.mercId);
  }

  goBack(): void{
    this.location.back();
  }

  addPrimaryWeapon(weaponId: number): void {
    if (this.mercWeapons.primaries.find(w => w.id === weaponId) == null) {
      this.mercWeapons.primaries.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 0);
    }
  }

  removePrimaryWeapon(weapon: Weapon): void {
    const index = this.mercWeapons.primaries.indexOf(weapon);
    if (index !== -1) {
      this.mercWeapons.primaries.splice(index, 1);
      this.weaponService.removeMercWeapon(this.mercId, weapon);
    }
  }

  addSecondaryWeapon(weaponId: number): void {
    if (this.mercWeapons.secondaries.find(w => w.id === weaponId) == null) {
      this.mercWeapons.secondaries.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 1);
    }
  }

  removeSecondaryWeapon(weapon: Weapon): void {
    const index = this.mercWeapons.secondaries.indexOf(weapon);
    if (index !== -1) {
      this.mercWeapons.secondaries.splice(index, 1);
      this.weaponService.removeMercWeapon(this.mercId, weapon);
    }
  }

  addMeleeWeapon(weaponId: number): void {
    if (this.mercWeapons.melee.find(w => w.id === weaponId) == null) {
      this.mercWeapons.melee.push(this.weapons.find(w => w.id === weaponId));
      this.weaponService.addMercWeapon(this.mercId, weaponId, 2);
    }
  }

  removeMeleeWeapon(weapon: Weapon): void {
    const index = this.mercWeapons.melee.indexOf(weapon);
    if (index !== -1) {
      this.mercWeapons.melee.splice(index, 1);
      this.weaponService.removeMercWeapon(this.mercId, weapon);
    }
  }

  saveMercWeapons(): void {

  }
}
