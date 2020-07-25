import {Component, Input, OnInit} from '@angular/core';
import {Ability, Info, Weapons} from '../../shared/models/merc';

@Component({
  selector: 'app-merc-info',
  templateUrl: './merc-info.component.html',
  styleUrls: ['./merc-info.component.css']
})
export class MercInfoComponent implements OnInit {

  @Input() info: Info;
  @Input() isEditable: boolean;
  weapons: Weapons;
  abilities: Ability;

  constructor() {
  }

  ngOnInit(): void {
  }

}
