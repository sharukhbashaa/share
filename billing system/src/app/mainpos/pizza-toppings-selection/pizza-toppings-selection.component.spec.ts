import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppingsSelectionComponent } from './pizza-toppings-selection.component';

describe('PizzaToppingsSelectionComponent', () => {
  let component: PizzaToppingsSelectionComponent;
  let fixture: ComponentFixture<PizzaToppingsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaToppingsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaToppingsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
