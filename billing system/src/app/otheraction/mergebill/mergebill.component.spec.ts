import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergebillComponent } from './mergebill.component';

describe('MergebillComponent', () => {
  let component: MergebillComponent;
  let fixture: ComponentFixture<MergebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
