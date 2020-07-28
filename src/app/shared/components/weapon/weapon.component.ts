import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: Weapon;
  @Output() addAsPrimary: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeFromPrimary: EventEmitter<number> = new EventEmitter<number>();
  @Output() addAsSecondary: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeFromSecondary: EventEmitter<number> = new EventEmitter<number>();
  @Output() addAsMelee: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeFromMelee: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addAsPrimaryWeapon(): void {
    this.addAsPrimary.emit(this.weapon.id);
  }

  addAsSecondaryWeapon(): void {
    this.addAsSecondary.emit(this.weapon.id);
  }

  addAsMeleeWeapon(): void {
    this.addAsMelee.emit(this.weapon.id);
  }
}
