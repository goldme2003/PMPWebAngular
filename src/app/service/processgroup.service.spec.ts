import { TestBed } from '@angular/core/testing';

import { ProcessgroupService } from './processgroup.service';

describe('ProcessService', () => {
  let service: ProcessgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
