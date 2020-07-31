import {Component, Input, OnInit} from '@angular/core';
import {Merc} from '../../shared/models/merc';
import {MercService} from '../services/interfaces/merc.service';

@Component({
  selector: 'app-merc-viewer',
  templateUrl: './merc-viewer.component.html',
  styleUrls: ['./merc-viewer.component.css']
})
export class MercViewerComponent implements OnInit {

  @Input() merc: Merc;
  isEditable: boolean;

  constructor(private mercService: MercService) {
  }

  ngOnInit(): void {
  }

  saveMerc(): void {
    this.isEditable = false;
    this.mercService.saveChanges();
  }
}
