import { TestBed } from '@angular/core/testing';

import { ProductLoadingPageService } from './product-loading-page.service';

describe('ProductLoadingPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductLoadingPageService = TestBed.get(ProductLoadingPageService);
    expect(service).toBeTruthy();
  });
});
