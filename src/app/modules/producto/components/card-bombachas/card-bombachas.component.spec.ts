import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBombachasComponent } from './card-bombachas.component';

describe('CardBombachasComponent', () => {
  let component: CardBombachasComponent;
  let fixture: ComponentFixture<CardBombachasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBombachasComponent]
    });
    fixture = TestBed.createComponent(CardBombachasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
