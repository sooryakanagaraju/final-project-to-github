import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudoperationComponent } from './crudoperation.component';

describe('CrudoperationComponent', () => {
  let component: CrudoperationComponent;
  let fixture: ComponentFixture<CrudoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
