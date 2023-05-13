import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescrolldisplayComponent } from './moviescrolldisplay.component';

describe('MoviescrolldisplayComponent', () => {
  let component: MoviescrolldisplayComponent;
  let fixture: ComponentFixture<MoviescrolldisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviescrolldisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescrolldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
