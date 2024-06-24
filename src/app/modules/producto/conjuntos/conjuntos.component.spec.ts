import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosComponent } from './conjuntos.component';

describe('ConjuntosComponent', () => {
  let component: ConjuntosComponent;
  let fixture: ComponentFixture<ConjuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConjuntosComponent]
    });
    fixture = TestBed.createComponent(ConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
