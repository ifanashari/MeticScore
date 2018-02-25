import { TestBed, inject } from '@angular/core/testing';

import { FireAuthService } from './fire-auth.service';

describe('FireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireAuthService]
    });
  });

  it('should be created', inject([FireAuthService], (service: FireAuthService) => {
    expect(service).toBeTruthy();
  }));
});
