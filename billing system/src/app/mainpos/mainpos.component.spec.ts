import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainposComponent } from './mainpos.component';

describe('MainposComponent', () => {
  let component: MainposComponent;
  let fixture: ComponentFixture<MainposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
