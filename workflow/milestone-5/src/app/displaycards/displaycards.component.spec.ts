import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycardsComponent } from './displaycards.component';

describe('DisplaycardsComponent', () => {
  let component: DisplaycardsComponent;
  let fixture: ComponentFixture<DisplaycardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
