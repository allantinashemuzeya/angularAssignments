import { TestBed } from '@angular/core/testing';

import { WeatherApiGlitchService } from './weather-api-glitch.service';

describe('WeatherAoiGlitchService', () => {
  let service: WeatherApiGlitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiGlitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
