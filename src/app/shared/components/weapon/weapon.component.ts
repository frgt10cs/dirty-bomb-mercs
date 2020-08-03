import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: Weapon;
  @Output() addAsPrimary: EventEmitter<Weapon> = new EventEmitter<Weapon>();
  @Output() addAsSecondary: EventEmitter<Weapon> = new EventEmitter<Weapon>();
  @Output() addAsMelee: EventEmitter<Weapon> = new EventEmitter<Weapon>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addAsPrimaryWeapon(): void {
    this.addAsPrimary.emit(this.weapon);
  }

  addAsSecondaryWeapon(): void {
    this.addAsSecondary.emit(this.weapon);
  }

  addAsMeleeWeapon(): void {
    this.addAsMelee.emit(this.weapon);
  }
}
