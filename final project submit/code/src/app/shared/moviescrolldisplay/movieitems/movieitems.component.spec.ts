import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieitemsComponent } from './movieitems.component';

describe('MovieitemsComponent', () => {
  let component: MovieitemsComponent;
  let fixture: ComponentFixture<MovieitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
