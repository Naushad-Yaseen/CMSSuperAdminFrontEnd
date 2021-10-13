import { TestBed } from '@angular/core/testing';

import { ManageOrganizationService } from './manage-organization.service';

describe('ManageOrganizationService', () => {
  let service: ManageOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
