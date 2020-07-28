import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: Weapon;

  constructor() {
  }

  ngOnInit(): void {
  }

}
