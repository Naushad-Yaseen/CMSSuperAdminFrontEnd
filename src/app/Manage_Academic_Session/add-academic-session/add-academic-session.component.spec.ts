import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicSessionComponent } from './add-academic-session.component';

describe('AddAcademicSessionComponent', () => {
  let component: AddAcademicSessionComponent;
  let fixture: ComponentFixture<AddAcademicSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademicSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
