import { TestBed } from '@angular/core/testing';

import { KorbanServiceService } from './korban-service.service';

describe('KorbanServiceService', () => {
  let service: KorbanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorbanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
