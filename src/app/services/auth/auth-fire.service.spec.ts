import { TestBed } from '@angular/core/testing';

import { AuthFireService } from './auth-fire.service';

describe('AuthFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFireService = TestBed.inject(AuthFireService);
    expect(service).toBeTruthy();
  });
});
