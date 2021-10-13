import { TestBed } from '@angular/core/testing';

import { MasterDropDownService } from './master-drop-down.service';

describe('MasterDropDownService', () => {
  let service: MasterDropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterDropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
