import { TestBed } from '@angular/core/testing';

import { GitfetchService } from './gitfetch.service';

describe('GitfetchService', () => {
  let service: GitfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
