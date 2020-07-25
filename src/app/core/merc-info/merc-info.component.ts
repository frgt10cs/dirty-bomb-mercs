import {Component, Input, OnInit} from '@angular/core';
import {Ability, Info} from '../../shared/models/merc';
import {Weapons} from '../../shared/models/weapon';

@Component({
  selector: 'app-merc-info',
  templateUrl: './merc-info.component.html',
  styleUrls: ['./merc-info.component.css']
})
export class MercInfoComponent implements OnInit {

  @Input() info: Info;
  @Input() isEditable: boolean;
  @Input() weapons: Weapons;
  @Input() abilities: Ability[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
