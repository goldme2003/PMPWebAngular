import { TestBed } from '@angular/core/testing';

import { IttoCategService } from './itto-categ.service';

describe('IttoCategService', () => {
  let service: IttoCategService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IttoCategService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
