import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundbillComponent } from './refundbill.component';

describe('RefundbillComponent', () => {
  let component: RefundbillComponent;
  let fixture: ComponentFixture<RefundbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
