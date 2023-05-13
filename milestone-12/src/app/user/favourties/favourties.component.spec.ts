import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourtiesComponent } from './favourties.component';

describe('FavourtiesComponent', () => {
  let component: FavourtiesComponent;
  let fixture: ComponentFixture<FavourtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavourtiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
