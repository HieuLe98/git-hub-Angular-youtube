import { TestBed } from '@angular/core/testing';

import { SangService } from './sang.service';

describe('SangService', () => {
  let service: SangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
