import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { useraccessGuard } from './useraccess.guard';

describe('useraccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => useraccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
