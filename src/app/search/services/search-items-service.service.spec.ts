import { TestBed } from '@angular/core/testing';

import { SearchItemsServiceService } from './search-items-service.service';

describe('SearchItemsServiceService', () => {
  let service: SearchItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
