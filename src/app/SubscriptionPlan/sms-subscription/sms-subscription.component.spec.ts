import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSubscriptionComponent } from './sms-subscription.component';

describe('SmsSubscriptionComponent', () => {
  let component: SmsSubscriptionComponent;
  let fixture: ComponentFixture<SmsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
