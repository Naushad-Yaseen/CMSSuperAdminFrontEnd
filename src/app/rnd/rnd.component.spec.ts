import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNDComponent } from './rnd.component';

describe('RNDComponent', () => {
  let component: RNDComponent;
  let fixture: ComponentFixture<RNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RNDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
