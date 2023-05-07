import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesliderComponent } from './movieslider.component';

describe('MoviesliderComponent', () => {
  let component: MoviesliderComponent;
  let fixture: ComponentFixture<MoviesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
