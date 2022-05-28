import { TestBed } from '@angular/core/testing';

import { SfmsService } from './sfms.service';

describe('SfmsService', () => {
  let service: SfmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
