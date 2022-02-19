import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from 'src/app/Manage_Section/services/section.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  dataSource: any;
  subjectRecordById: any;

  constructor(private subjectService: SubjectService,
    private sectionService: SectionService, private toaster: ToastrService,
    private dialog: MatDialog, private fb: FormBuilder) { }
  displayedColumns: string[] = ['SubjectName', 'SubjectCode', 'SubjectCredit', 'actions']
  form: FormGroup;
  ClassDropDown: any;
  SectionDropDown: any;
  SubjectID: any;
  ngOnInit(): void {
    this.SubjectList()
  }
  SubjectList() {
    this.subjectService.subjectList().subscribe((res: any) => {
      this.dataSource = res.responseData;
    })
  }
  addSubjectpopup(templateRef: TemplateRef<any>) {
    this.SubjectID=null;
    this.dialog.open(templateRef)
    this.form = this.fb.group({
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      subjectCredit: ['', Validators.required],
      classID: ['', Validators.required],
      sectionID: ['', Validators.required],
    })
    this.classDropDown();
    this.sectionDropDown();
  }

  editSubjectpopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef)
    this.SubjectID = id;
    // this.SubjectID = null;
    this.form = this.fb.group({
      subjectID: [],
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      subjectCredit: ['', Validators.required],
      classID: ['', Validators.required],
      sectionID: ['', Validators.required],
    })
    this.classDropDown();
    this.sectionDropDown();
    this.getSubjectById()

  }
  getSubjectById() {
    this.subjectService.subjectById(this.SubjectID).subscribe((res: any) => {
      this.subjectRecordById = res.responseData;
      console.log('getSubjectById', this.subjectRecordById);
      this.form.patchValue({
        subjectID: res.responseData['subjectID'],
        subjectName: res.responseData['subjectName'],
        subjectCode: res.responseData['subjectCode'],
        subjectCredit: res.responseData['subjectCredit'],
        classID: res.responseData['classID'],
        sectionID: res.responseData['sectionID'],
      })
    })
  }

  classDropDown() {
    this.sectionService.getClassDropDown().subscribe((res: any) => {
      this.ClassDropDown = res.responseData;
     })
  }
  sectionDropDown() {
    this.sectionService.getSectionDropDown().subscribe((res: any) => {
      this.SectionDropDown = res.responseData;
    })
  }

  onSubmit() {
    if (!this.SubjectID) {
      this.addSubject();
    } else {
      this.updateSubject();
    }

  }

  addSubject() {
    this.subjectService.addsubject(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.SubjectList()
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }
  updateSubject() {
    this.subjectService.updatesubject(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.SubjectList();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message)
      }
    })
  }
  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef)
    this.SubjectID = id;
  }
  confirmDelete() {
    debugger;
    this.subjectService.deleteSubject(this.SubjectID).subscribe((res: any) => {
      // this.loadSection();
      if (res.status == 1) {
        this.SubjectList();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }
}
