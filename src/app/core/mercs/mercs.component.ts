import {Component, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/interfaces/merc.service';

@Component({
  selector: 'app-mercs',
  templateUrl: './mercs.component.html',
  styleUrls: ['./mercs.component.css']
})
export class MercsComponent implements OnInit {


  private _selectedMerc: Merc;
  set selectedMerc(value: Merc) {
    if (value === null) {
      return;
    }
    this._selectedMerc = value;
  }

  get selectedMerc(): Merc {
    return this._selectedMerc;
  }

  isEditable: boolean;

  constructor(public mercService: MercService) {
    this.selectedMerc = this.mercService.first();
  }

  ngOnInit(): void {
  }

  selectMercById(id: number): void {
    this.selectedMerc = this.mercService.getMercById(id);
  }
}
