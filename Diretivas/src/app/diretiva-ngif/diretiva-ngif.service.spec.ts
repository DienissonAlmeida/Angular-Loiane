import { TestBed } from '@angular/core/testing';

import { DiretivaNgIfService } from './diretiva-ngif.service';

describe('DiretivaIfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretivaNgIfService = TestBed.get(DiretivaNgIfService);
    expect(service).toBeTruthy();
  });
});
