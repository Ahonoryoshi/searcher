import { TestBed } from '@angular/core/testing';

import { AusersService } from './ausers.service';

describe('AusersService', () => {
  let service: AusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
