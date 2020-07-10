import { TestBed } from '@angular/core/testing';

import { ProcittoService } from './procitto.service';

describe('ProcittoService', () => {
  let service: ProcittoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcittoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
