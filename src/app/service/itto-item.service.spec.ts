import { TestBed } from '@angular/core/testing';

import { IttoItemService } from './itto-item.service';

describe('IttoItemService', () => {
  let service: IttoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IttoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
