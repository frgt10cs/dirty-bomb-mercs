import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Weapon} from '../../models/weapon';

@Component({
  selector: 'app-merc-weapon-list',
  templateUrl: './merc-weapon-list.component.html',
  styleUrls: ['./merc-weapon-list.component.css']
})
export class MercWeaponListComponent implements OnInit {

  @Input() title: string;
  @Input() weapons: Weapon[];
  @Output() remove: EventEmitter<Weapon> = new EventEmitter<Weapon>();

  constructor() { }

  ngOnInit(): void {
  }

  removeWeapon(weapon: Weapon): void{
    this.remove.emit(weapon);
  }
}
