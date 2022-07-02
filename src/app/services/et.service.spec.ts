import { TestBed } from '@angular/core/testing';

import { ETService } from './et.service';

describe('ETService', () => {
  let service: ETService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ETService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
