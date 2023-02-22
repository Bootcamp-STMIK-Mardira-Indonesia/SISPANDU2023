import { TestBed } from '@angular/core/testing';

import { PengaduanFormServiceService } from './pengaduan-form-service.service';

describe('PengaduanFormServiceService', () => {
  let service: PengaduanFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengaduanFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
