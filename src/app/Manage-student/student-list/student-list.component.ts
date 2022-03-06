import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit,Output, TemplateRef,EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
   dataSource:any;
   selection = new SelectionModel<any>(true, []);
  //dataSource:any;
  // form:FormGroup;
 // @Output() onselect = new EventEmitter();
  selectedData=0;
  term:any;
  AcademicSessionDropdown: any;
  ClassDropDown: any;
  SectionDropDown: any;
  sectionId = 0;
  classID = 0;
  acdemicID = 0;
  selectedRow:any;
  selectedId:any[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private studentService: StudentService, private sectionService: SectionService,
    private dialog: MatDialog, private toaster: ToastrService) {
      // const users = Array.from({length: 100});
    }

  displayedColumns: string[] = ['select','profilePhoto', 'admissionNumber', 'fullName', 'email', 'actions']
  ngOnInit(): void {
    this.selectedRow = []
    this.getStudentList()
    this.academicSessionDropdown();
    this.classDropDown();
    this.sectionDropDown();

  }
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  isAllSelected() {
    this.selectedId =[];
    if(this.selection.selected.length !=0){
    for(var i=0;i<this.selection.selected.length;i++){
       if(this.selection.selected[i].studentID != undefined){
       this.selectedId.push(this.selection.selected[i].studentID)
      }
      if(this.selection.selected[i].teacherID != undefined){
        this.selectedId.push(this.selection.selected[i].teacherID)
       }
    }
   // this.onselect.emit(this.selectedId)
  }
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach((row:any) => this.selection.select(row));
  // }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row:any) => this.selection.select(row));
      if(this.selection.selected.length == 0){
        this.selectedId =[];
        console.log("SELECTEDDATA",this.selectedId)
       // this.onselect.emit(this.selectedId)
      }
      console.log()
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
      // this.dataSource =res.responseData;
       this.dataSource =new MatTableDataSource<any>(res.responseData);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      console.log('getStudentList', this.dataSource.filteredData);

    });
  }

  printFlag:boolean;

  onselect(data?:any){
    debugger;
    if(data == undefined){
      this.printFlag = false;
    }
    else{
    if(data.length != undefined){
      if(data.length == 0){
        this.printFlag = false;
        this.selectedData = data.length;
      }
      else{
        this.selectedRow = data;
        this.selectedData = data.length;
        this.printFlag = true;
      }
    }
  }
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
    console.log('Event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('this.dataSource.filter', this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
