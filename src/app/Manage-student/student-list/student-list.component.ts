import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
// import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from 'src/app/Manage_Section/services/section.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
   dataSource: MatTableDataSource<any>;
  //dataSource:any;
  // form:FormGroup;
  term:any;
  AcademicSessionDropdown: any;
  ClassDropDown: any;
  SectionDropDown: any;
  sectionId = 0;
  classID = 0;
  acdemicID = 0;

  constructor(private studentService: StudentService, private sectionService: SectionService,
    private dialog: MatDialog, private toaster: ToastrService) { }
  displayedColumns: string[] = ['profilePhoto', 'admissionNumber', 'fullName', 'email', 'actions']
  ngOnInit(): void {
    this.getStudentList()
    this.academicSessionDropdown();
    this.classDropDown();
    this.sectionDropDown();
  }
  filterStudentByAcdemic(event: any) {
    this.acdemicID = event.value;
    console.log('acdemicID', this.acdemicID);

     this.getStudentList();
  }
  filterStudentByClass(event: any) {
    this.classID = event.value;
    console.log('filterStudentByClass', this.classID);
    this.getStudentList();
  }

  filterStudentBySection(event: any) {
    this.sectionId = event.value;

     this.getStudentList();
  }
  getStudentList() {
    this.studentService.getStudentDetailsByAcademecIdClassIdSectionId(this.acdemicID, this.classID, this.sectionId).subscribe((res: any) => {
      this.dataSource =res.responseData;
       this.dataSource =new MatTableDataSource<any>(res.responseData);
      console.log('getStudentList', this.dataSource.filteredData);

    })
  }

  deleteId: any;
  FirstName: any;
  LaststName: any;
  actionDialogPopup(templateRef: TemplateRef<any>, id: any, firstname: any, lastname: any) {
    this.dialog.open(templateRef);
    this.deleteId = id;
    this.FirstName = firstname;
    this.LaststName = lastname;
    console.log("id", this.deleteId);
  }

  confirmDelete() {
    this.studentService.DeleteStudent(this.deleteId).subscribe((res: any) => {
      if (res.status > 0) {
        this.getStudentList()
        this.toaster.success(res.message);
      }
      else {
        this.toaster.error(res.message);
      }
    })


  }

  academicSessionDropdown() {
    this.studentService.academicSessionDropDown().subscribe((res: any) => {
      this.AcademicSessionDropdown = res.responseData;
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

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('this.dataSource.filter', this.dataSource.filter);
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
//   filterTable (filterValue :any) {
//     console.log('filterTable',this.dataSource.filter);
//     this.dataSource.filter = filterValue.trim().toLowerCase();


//  }

}
