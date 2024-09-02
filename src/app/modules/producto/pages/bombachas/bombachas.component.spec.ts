import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombachasComponent } from './bombachas.component';

describe('BombachasComponent', () => {
  let component: BombachasComponent;
  let fixture: ComponentFixture<BombachasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BombachasComponent]
    });
    fixture = TestBed.createComponent(BombachasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
