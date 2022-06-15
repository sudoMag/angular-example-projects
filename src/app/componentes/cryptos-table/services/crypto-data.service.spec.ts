import { TestBed } from '@angular/core/testing';

import { CryptoDataService } from './crypto-data.service';

describe('GetCryptoDataService', () => {
  let service: CryptoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
