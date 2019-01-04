import { TestBed } from '@angular/core/testing';

import { AuthsystemService } from './authsystem.service';

describe('AuthsystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthsystemService = TestBed.get(AuthsystemService);
    expect(service).toBeTruthy();
  });
});
