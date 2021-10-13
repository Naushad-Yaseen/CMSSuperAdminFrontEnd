import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailSubscriptionComponent } from './add-email-subscription.component';

describe('AddEmailSubscriptionComponent', () => {
  let component: AddEmailSubscriptionComponent;
  let fixture: ComponentFixture<AddEmailSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmailSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmailSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
