import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierchildComponent } from './cashierchild.component';

describe('CashierchildComponent', () => {
  let component: CashierchildComponent;
  let fixture: ComponentFixture<CashierchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
