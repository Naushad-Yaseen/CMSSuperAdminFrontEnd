import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteSubscriptionComponent } from './edit-site-subscription.component';

describe('EditSiteSubscriptionComponent', () => {
  let component: EditSiteSubscriptionComponent;
  let fixture: ComponentFixture<EditSiteSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSiteSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
