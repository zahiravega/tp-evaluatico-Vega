import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPrincComponent } from './titulo-princ.component';

describe('TituloPrincComponent', () => {
  let component: TituloPrincComponent;
  let fixture: ComponentFixture<TituloPrincComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloPrincComponent]
    });
    fixture = TestBed.createComponent(TituloPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
