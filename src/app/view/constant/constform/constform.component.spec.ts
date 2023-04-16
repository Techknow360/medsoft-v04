import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstformComponent } from './constform.component';

describe('ConstformComponent', () => {
  let component: ConstformComponent;
  let fixture: ComponentFixture<ConstformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
