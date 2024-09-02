import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConjuntosComponent } from './card-conjuntos.component';

describe('CardConjuntosComponent', () => {
  let component: CardConjuntosComponent;
  let fixture: ComponentFixture<CardConjuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConjuntosComponent]
    });
    fixture = TestBed.createComponent(CardConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
