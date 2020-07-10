import { TestBed } from '@angular/core/testing';

import { ProctoolService } from './proctool.service';

describe('ProctoolService', () => {
  let service: ProctoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProctoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
