import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBombComponent } from './table.bomb.component';

describe('TableBombComponent', () => {
  let component: TableBombComponent;
  let fixture: ComponentFixture<TableBombComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBombComponent]
    });
    fixture = TestBed.createComponent(TableBombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
