import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillitemsformComponent } from './billitemsform.component';

describe('BillitemsformComponent', () => {
  let component: BillitemsformComponent;
  let fixture: ComponentFixture<BillitemsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillitemsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillitemsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
