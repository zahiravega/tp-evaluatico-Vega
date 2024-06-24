import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColalessComponent } from './colaless.component';

describe('ColalessComponent', () => {
  let component: ColalessComponent;
  let fixture: ComponentFixture<ColalessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColalessComponent]
    });
    fixture = TestBed.createComponent(ColalessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
