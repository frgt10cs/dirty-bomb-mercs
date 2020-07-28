import {Component, Input, OnInit} from '@angular/core';
import {Weapons} from '../../shared/models/weapon';
import {WeaponService} from '../services/weapon.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  weapons: Weapons;
  @Input() mercId: number;

  constructor(private weaponService: WeaponService) {
  }

  ngOnInit(): void {
    this.weapons = this.weaponService.getMercWeapons(this.mercId);
  }

  setElementDisplay(element: HTMLElement, value: string): void {
    if (element !== undefined) {
      element.style.display = value;
    }
  }
}
