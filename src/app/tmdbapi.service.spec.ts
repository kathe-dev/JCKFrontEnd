import { TestBed } from '@angular/core/testing';

import { TmdbapiService } from './tmdbapi.service';

describe('TmdbapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmdbapiService = TestBed.get(TmdbapiService);
    expect(service).toBeTruthy();
  });
});
