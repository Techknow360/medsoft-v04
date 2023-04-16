import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductreturnformComponent } from './productreturnform.component';

describe('ProductreturnformComponent', () => {
  let component: ProductreturnformComponent;
  let fixture: ComponentFixture<ProductreturnformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductreturnformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductreturnformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
