import { TestBed } from '@angular/core/testing';

import { ToolgroupService } from './toolgroup.service';

describe('ToolgroupService', () => {
  let service: ToolgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
