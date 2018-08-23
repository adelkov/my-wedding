import { TestBed, inject } from '@angular/core/testing';

import { GuestlistService } from './guestlist.service';

describe('GuestlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestlistService]
    });
  });

  it('should be created', inject([GuestlistService], (service: GuestlistService) => {
    expect(service).toBeTruthy();
  }));
});
