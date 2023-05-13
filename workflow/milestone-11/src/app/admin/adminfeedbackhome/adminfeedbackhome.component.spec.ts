import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedbackhomeComponent } from './adminfeedbackhome.component';

describe('AdminfeedbackhomeComponent', () => {
  let component: AdminfeedbackhomeComponent;
  let fixture: ComponentFixture<AdminfeedbackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfeedbackhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfeedbackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
