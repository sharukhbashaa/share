import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtheractionComponent } from './otheraction.component';

describe('OtheractionComponent', () => {
  let component: OtheractionComponent;
  let fixture: ComponentFixture<OtheractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtheractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtheractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
