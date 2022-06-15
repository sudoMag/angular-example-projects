import { TestBed } from '@angular/core/testing';

import { ErrorCardService } from './error-card.service';

describe('ErrorCardService', () => {
  let service: ErrorCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
