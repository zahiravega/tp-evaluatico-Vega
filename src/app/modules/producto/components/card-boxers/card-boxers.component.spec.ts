import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoxersComponent } from './card-boxers.component';

describe('CardBoxersComponent', () => {
  let component: CardBoxersComponent;
  let fixture: ComponentFixture<CardBoxersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBoxersComponent]
    });
    fixture = TestBed.createComponent(CardBoxersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
