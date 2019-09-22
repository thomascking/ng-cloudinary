import { TestBed } from '@angular/core/testing';

import { NgCloudinaryService } from './ng-cloudinary.service';

describe('NgCloudinaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCloudinaryService = TestBed.get(NgCloudinaryService);
    expect(service).toBeTruthy();
  });
});
