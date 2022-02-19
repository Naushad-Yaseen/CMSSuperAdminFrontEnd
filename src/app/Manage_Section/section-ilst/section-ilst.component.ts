import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-section-ilst',
  templateUrl: './section-ilst.component.html',
  styleUrls: ['./section-ilst.component.css']
})
export class SectionIlstComponent implements OnInit {
  dataSource: any;
  form: FormGroup;
  Sectiondropdown: any;
  ClassDropDown: any;

  constructor(private sectionService: SectionService, private dilog: MatDialog,
    private formBuilder: FormBuilder, private toaster: ToastrService
  ) { }
  displayedColumns: string[] = ['SectionName', 'SectionCode', 'studentsLimit', 'actions']
  ngOnInit(): void {
    this.loadSection();
    this.classDropDown();
  }
  loadSection() {
    this.sectionService.getSection().subscribe((res: any) => {
      this.dataSource = res.responseData;
      console.log('loadSection', this.dataSource);

    })
  }
  addSectionpopup(templateRef: TemplateRef<any>) {
    this.SectionID = null;
    this.dilog.open(templateRef)
    this.form = this.formBuilder.group({
      sectionName: ['', Validators.required],
      sectionCode: ['', Validators.required],
      studentsLimit: ['', Validators.required],
      classID: ['', Validators.required],
    })
  }
  SectionID: any;
  editSectionPopup(templateRef: TemplateRef<any>, id: any) {
    this.dilog.open(templateRef)
    console.log('sectionID', id);
    this.SectionID = id;
    this.form = this.formBuilder.group({
      sectionID: ['', Validators.required],
      sectionName: ['', Validators.required],
      sectionCode: ['', Validators.required],
      studentsLimit: ['', Validators.required],
      classID: ['', Validators.required],
    })
    this.loadSectionById(id)
  }

  loadSectionById(id: any) {
    this.sectionService.getSectionById(id).subscribe((res: any) => {
      console.log('loadSectionById', res.responseData);
      this.form.patchValue({
        sectionID: res.responseData['sectionID'],
        sectionName: res.responseData['sectionName'],
        sectionCode: res.responseData['sectionCode'],
        studentsLimit: res.responseData['studentsLimit'],
        classID: res.responseData['classID'],
      })
    })
  }
  AddSection() {
    this.sectionService.addSection(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.loadSection();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }

    })
  }
  UpdateSection() {
    this.sectionService.updateSection(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.loadSection();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }

    })
  }

  classDropDown() {
    this.sectionService.getClassDropDown().subscribe((res: any) => {
      this.ClassDropDown = res.responseData;
      console.log('classDropDown', this.ClassDropDown);

    })
  }

  onSubmit() {
    // debugger;
    if (!this.SectionID) {
      this.AddSection();
    } else {
      this.UpdateSection()
    }
  }

  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dilog.open(templateRef)
    this.SectionID = id;
  }
  confirmDelete() {
    debugger;
    this.sectionService.deleteSection(this.SectionID).subscribe((res: any) => {
      // this.loadSection();
      if (res.status == 1) {
        this.loadSection();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }
}
