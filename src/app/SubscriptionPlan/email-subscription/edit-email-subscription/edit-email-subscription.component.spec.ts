import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailSubscriptionComponent } from './edit-email-subscription.component';

describe('EditEmailSubscriptionComponent', () => {
  let component: EditEmailSubscriptionComponent;
  let fixture: ComponentFixture<EditEmailSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmailSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
