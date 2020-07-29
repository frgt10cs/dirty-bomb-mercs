import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Weapons} from '../../shared/models/weapon';
import {WeaponService} from '../services/weapon.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit, OnChanges {

  weapons: Weapons;
  @Input() mercId: number;

  constructor(private weaponService: WeaponService) {
  }

  ngOnInit(): void {

  }

  setElementDisplay(element: HTMLElement, value: string): void {
    if (element !== undefined) {
      element.style.display = value;
    }
  }

  ngOnChanges(changes: SimpleChanges){
    this.weapons = this.weaponService.getMercWeapons(this.mercId);
  }
}
