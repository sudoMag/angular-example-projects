import { TestBed } from '@angular/core/testing';

import { FoodDataService } from './food-data.service';

describe('NftsDataService', () => {
  let service: FoodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
