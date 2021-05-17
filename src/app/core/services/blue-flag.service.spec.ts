import { TestBed } from '@angular/core/testing';

import { BlueFlagService } from './blue-flag.service';

describe('BlueFlagService', () => {
  let service: BlueFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
