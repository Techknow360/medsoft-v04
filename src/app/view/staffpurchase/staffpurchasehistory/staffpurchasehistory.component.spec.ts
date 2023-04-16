import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpurchasehistoryComponent } from './staffpurchasehistory.component';

describe('StaffpurchasehistoryComponent', () => {
  let component: StaffpurchasehistoryComponent;
  let fixture: ComponentFixture<StaffpurchasehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffpurchasehistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffpurchasehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
