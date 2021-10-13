import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSubscriptionComponent } from './site-subscription.component';

describe('SiteSubscriptionComponent', () => {
  let component: SiteSubscriptionComponent;
  let fixture: ComponentFixture<SiteSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
