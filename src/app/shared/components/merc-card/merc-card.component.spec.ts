import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercCardComponent } from './merc-card.component';

describe('MercCardComponent', () => {
  let component: MercCardComponent;
  let fixture: ComponentFixture<MercCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
