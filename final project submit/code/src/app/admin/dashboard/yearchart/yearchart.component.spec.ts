import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearchartComponent } from './yearchart.component';

describe('YearchartComponent', () => {
  let component: YearchartComponent;
  let fixture: ComponentFixture<YearchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
