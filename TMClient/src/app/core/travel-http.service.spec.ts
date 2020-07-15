import { TestBed } from '@angular/core/testing';

import { TravelHttpService } from './travel-http.service';

describe('TravelHttpService', () => {
  let service: TravelHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
