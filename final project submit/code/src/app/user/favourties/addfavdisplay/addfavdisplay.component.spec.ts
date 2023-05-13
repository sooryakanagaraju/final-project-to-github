import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfavdisplayComponent } from './addfavdisplay.component';

describe('AddfavdisplayComponent', () => {
  let component: AddfavdisplayComponent;
  let fixture: ComponentFixture<AddfavdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfavdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfavdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
