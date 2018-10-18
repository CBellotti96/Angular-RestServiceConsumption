import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencePopupComponent } from './science-popup.component';

describe('SciencePopupComponent', () => {
  let component: SciencePopupComponent;
  let fixture: ComponentFixture<SciencePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});