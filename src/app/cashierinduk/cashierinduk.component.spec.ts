import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierindukComponent } from './cashierinduk.component';

describe('CashierindukComponent', () => {
  let component: CashierindukComponent;
  let fixture: ComponentFixture<CashierindukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierindukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierindukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
