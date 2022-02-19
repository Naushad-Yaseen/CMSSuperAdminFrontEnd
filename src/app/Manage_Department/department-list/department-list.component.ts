import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  dataSource: any;
  form: FormGroup;

  constructor(private departmentService: DepartmentService, private fb: FormBuilder,
    private toaster: ToastrService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['DepartmentName', 'actions',];

  ngOnInit(): void {
    this.loadDepartment();
  }
  loadDepartment() {
    this.departmentService.departmentList().subscribe((res: any) => {
      this.dataSource = res.responseData;
      console.log('loadDepartment', this.dataSource);
    })
  }

  addDepartmentpopup(templateRef: TemplateRef<any>) {
    this.DepartmentId = null; // if we go from edit to add without calling api
    this.dialog.open(templateRef);
    this.form = this.fb.group({
      departmentName: ['', Validators.required]
    })
  }
  onSubmit() {
    debugger;
    if (this.DepartmentId) {
      this.EditDepartment();
    } else {
      this.AddDepartment();
    }
  }
  AddDepartment() {
    this.departmentService.addDepartment(this.form.value).subscribe((res: any) => {
      if (res.status > 0) {
        this.loadDepartment();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }

  EditDepartment() {
    this.departmentService.updateDepartment(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.loadDepartment();
        this.DepartmentId = null;
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }

    })
  }

  DepartmentId: any
  editDepartmentpopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.DepartmentId = id;
    console.log("departmentId", this.DepartmentId);
    this.form = this.fb.group({
      departmentID: [],
      departmentName: ['', Validators.required]
    })
    this.loadDepartmentById();
  }

  loadDepartmentById() {
    this.departmentService.getDepartmentById(this.DepartmentId).subscribe((res: any) => {
      this.form.patchValue({
        departmentID: res.responseData['departmentID'],
        departmentName: res.responseData['departmentName']
      });
    })
  }
  deleteId: any;
  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.deleteId = id;
    console.log("id", this.deleteId);
  }

  confirmDelete() {
    this.departmentService.Deletedepartment(this.deleteId).subscribe((res: any) => {
      if (res.status > 0) {
        this.loadDepartment();
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
      //  this.loadDepartment(); wrong way
    })
  }

}
