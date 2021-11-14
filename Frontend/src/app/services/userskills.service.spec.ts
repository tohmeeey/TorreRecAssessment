import { TestBed } from '@angular/core/testing';

import { UserskillsService } from './userskills.service';

describe('UserskillsService', () => {
  let service: UserskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
