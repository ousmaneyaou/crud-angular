import { TestBed } from '@angular/core/testing';

import { AutentificatonService } from './autentificaton.service';

describe('AutentificatonService', () => {
  let service: AutentificatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
