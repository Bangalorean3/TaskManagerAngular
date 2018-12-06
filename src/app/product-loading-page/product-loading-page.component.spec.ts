import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoadingPageComponent } from './product-loading-page.component';

describe('ProductLoadingPageComponent', () => {
  let component: ProductLoadingPageComponent;
  let fixture: ComponentFixture<ProductLoadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLoadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
