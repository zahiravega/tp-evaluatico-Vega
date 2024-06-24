import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasiersComponent } from './brasiers.component';

describe('BrasiersComponent', () => {
  let component: BrasiersComponent;
  let fixture: ComponentFixture<BrasiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrasiersComponent]
    });
    fixture = TestBed.createComponent(BrasiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
