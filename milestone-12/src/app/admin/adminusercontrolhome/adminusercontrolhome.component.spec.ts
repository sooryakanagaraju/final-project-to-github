import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusercontrolhomeComponent } from './adminusercontrolhome.component';

describe('AdminusercontrolhomeComponent', () => {
  let component: AdminusercontrolhomeComponent;
  let fixture: ComponentFixture<AdminusercontrolhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusercontrolhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusercontrolhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
