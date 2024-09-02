import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBrasiersComponent } from './card-brasiers.component';

describe('CardBrasiersComponent', () => {
  let component: CardBrasiersComponent;
  let fixture: ComponentFixture<CardBrasiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBrasiersComponent]
    });
    fixture = TestBed.createComponent(CardBrasiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
