import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditerComponent } from './text-editer.component';

describe('TextEditerComponent', () => {
  let component: TextEditerComponent;
  let fixture: ComponentFixture<TextEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
