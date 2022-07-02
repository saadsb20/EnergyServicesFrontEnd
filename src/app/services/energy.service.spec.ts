import { TestBed } from '@angular/core/testing';

import { EnergyService } from './energy.service';

describe('EnergyService', () => {
  let service: EnergyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
