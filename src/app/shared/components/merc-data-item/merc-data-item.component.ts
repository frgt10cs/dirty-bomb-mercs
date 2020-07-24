import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-merc-data-item',
  templateUrl: './merc-data-item.component.html',
  styleUrls: ['./merc-data-item.component.css']
})
export class MercDataItemComponent implements OnInit, DoCheck {

  @Input() name: string;
  @Input() value: string | number;
  @Output() valueChange: EventEmitter<string | number> = new EventEmitter<string | number>();
  @Input() isEditable: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.valueChange.next(this.value);
  }
}
