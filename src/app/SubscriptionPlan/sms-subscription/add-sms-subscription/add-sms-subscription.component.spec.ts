import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmsSubscriptionComponent } from './add-sms-subscription.component';

describe('AddSmsSubscriptionComponent', () => {
  let component: AddSmsSubscriptionComponent;
  let fixture: ComponentFixture<AddSmsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmsSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
