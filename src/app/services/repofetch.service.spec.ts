import { TestBed } from '@angular/core/testing';

import { RepofetchService } from './repofetch.service';

describe('RepofetchService', () => {
  let service: RepofetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepofetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
