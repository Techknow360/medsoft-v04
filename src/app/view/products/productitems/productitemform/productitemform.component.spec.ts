import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemformComponent } from './productitemform.component';

describe('ProductitemformComponent', () => {
  let component: ProductitemformComponent;
  let fixture: ComponentFixture<ProductitemformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductitemformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductitemformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
