import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestredirectComponent } from './testredirect.component';

describe('TestredirectComponent', () => {
  let component: TestredirectComponent;
  let fixture: ComponentFixture<TestredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestredirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
