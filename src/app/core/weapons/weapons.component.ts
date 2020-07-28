import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/merc.service';
import {WeaponService} from '../services/weapon.service';
import {Weapon} from '../../shared/models/weapon';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  mercId: number;
  merc: Merc;
  weapons: Weapon[];
  weaponPage: number;

  constructor(private route: ActivatedRoute, private mercService: MercService,
              private weaponService: WeaponService) {
  }

  ngOnInit(): void {
    this.mercId = +this.route.snapshot.paramMap.get('mercId');
    this.merc = this.mercService.getMercById(this.mercId);
    this.weapons = this.weaponService.getAll();
  }


}
