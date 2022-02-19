import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicSessionComponent } from './edit-academic-session.component';

describe('EditAcademicSessionComponent', () => {
  let component: EditAcademicSessionComponent;
  let fixture: ComponentFixture<EditAcademicSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcademicSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
