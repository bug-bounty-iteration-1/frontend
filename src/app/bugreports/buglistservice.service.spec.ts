import { TestBed } from '@angular/core/testing';

import { BuglistserviceService } from './buglistservice.service';

describe('BuglistserviceService', () => {
  let service: BuglistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuglistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
