import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpurchaseComponent } from './staffpurchase.component';

describe('StaffpurchaseComponent', () => {
  let component: StaffpurchaseComponent;
  let fixture: ComponentFixture<StaffpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
