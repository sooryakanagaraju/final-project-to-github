import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDFeedbackComponent } from './crudfeedback.component';

describe('CRUDFeedbackComponent', () => {
  let component: CRUDFeedbackComponent;
  let fixture: ComponentFixture<CRUDFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
