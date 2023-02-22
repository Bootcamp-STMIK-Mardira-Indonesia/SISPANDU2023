import { TestBed } from '@angular/core/testing';

import { PengaduFormServiceService } from './pengadu-form-service.service';

describe('PengaduFormServiceService', () => {
  let service: PengaduFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengaduFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
