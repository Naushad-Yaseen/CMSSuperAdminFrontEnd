import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteSubscriptionComponent } from './add-site-subscription.component';

describe('AddSiteSubscriptionComponent', () => {
  let component: AddSiteSubscriptionComponent;
  let fixture: ComponentFixture<AddSiteSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
