import { TestBed, inject } from '@angular/core/testing';

import { ForecastLoaderService } from './forecast-loader.service';

describe('ForecastLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastLoaderService]
    });
  });

  it('should be created', inject([ForecastLoaderService], (service: ForecastLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
