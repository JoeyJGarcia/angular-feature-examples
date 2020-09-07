import { TestBed } from '@angular/core/testing';

import { CrudtoolGuard } from './crudtool.guard';

describe('CrudtoolGuard', () => {
  let guard: CrudtoolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CrudtoolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
