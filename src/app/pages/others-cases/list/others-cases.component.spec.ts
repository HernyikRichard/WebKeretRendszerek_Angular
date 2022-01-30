import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersCasesComponent } from './others-cases.component';

describe('OthersCasesComponent', () => {
  let component: OthersCasesComponent;
  let fixture: ComponentFixture<OthersCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
