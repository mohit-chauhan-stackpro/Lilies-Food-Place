import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFoodItemComponent } from './dash-food-item.component';

describe('DashFoodItemComponent', () => {
  let component: DashFoodItemComponent;
  let fixture: ComponentFixture<DashFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashFoodItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
