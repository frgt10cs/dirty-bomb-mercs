import {Component, Input, OnInit} from '@angular/core';
import {Weapons} from '../../shared/models/weapon';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {

  @Input() weapons: Weapons;

  constructor() {
  }

  ngOnInit(): void {
  }

  setElementDisplay(element: HTMLElement, value: string): void {
    if (element !== undefined) {
      element.style.display = value;
    }
  }
}
