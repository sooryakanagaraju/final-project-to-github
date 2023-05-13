import { TestBed } from '@angular/core/testing';

import { MoviereviewService } from './moviereview.service';

describe('MoviereviewService', () => {
  let service: MoviereviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviereviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
