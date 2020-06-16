import { TestBed } from '@angular/core/testing';

import { KsServiceService } from './ks-service.service';

describe('KsServiceService', () => {
  let service: KsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
