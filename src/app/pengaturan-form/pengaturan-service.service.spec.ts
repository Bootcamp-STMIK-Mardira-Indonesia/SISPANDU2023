import { TestBed } from '@angular/core/testing';

import { PengaturanServiceService } from './pengaturan-service.service';

describe('PengaturanServiceService', () => {
  let service: PengaturanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengaturanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
