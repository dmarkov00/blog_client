import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedinUserGuard } from './loggedin-user.guard';

describe('LoggedinUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedinUserGuard]
    });
  });

  it('should ...', inject([LoggedinUserGuard], (guard: LoggedinUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
