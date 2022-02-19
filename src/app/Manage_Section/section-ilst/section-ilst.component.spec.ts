import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIlstComponent } from './section-ilst.component';

describe('SectionIlstComponent', () => {
  let component: SectionIlstComponent;
  let fixture: ComponentFixture<SectionIlstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionIlstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
