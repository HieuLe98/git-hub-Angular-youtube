import { TestBed } from '@angular/core/testing';

import { NfvoService } from './nfvo.service';

describe('NfvoService', () => {
  let service: NfvoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfvoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
