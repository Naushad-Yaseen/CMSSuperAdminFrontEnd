import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmsSubscriptionComponent } from './edit-sms-subscription.component';

describe('EditSmsSubscriptionComponent', () => {
  let component: EditSmsSubscriptionComponent;
  let fixture: ComponentFixture<EditSmsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSmsSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSmsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
