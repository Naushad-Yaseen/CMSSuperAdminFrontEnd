import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  form: FormGroup;
  ClassID: any;
  DepartmentDropdown:any;
  constructor(private classService: ClassService, private fb: FormBuilder,
    private toaster: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ClassID = this.activatedRoute.snapshot.params.Id
    console.log('ClassID', this.ClassID);
    this.form = this.fb.group({
      classID: [0],
      className: ['', Validators.required],
      classCode: ['', Validators.required],
      studentsLimit: ['', Validators.required],
      departmentID: ['', Validators.required],
    })
    this.loadClassById()
    this.getDepartmentDropDown()
  }

  loadClassById() {
    this.classService.ClassById(this.ClassID).subscribe((res: any) => {
      console.log('loadClassById', res);

      this.form.patchValue({
        classID: res.responseData['classID'],
        className: res.responseData['className'],
        classCode: res.responseData['classCode'],
        studentsLimit: res.responseData['studentsLimit'],
        departmentID: res.responseData['departmentID'],
      });
    })
  }

  getDepartmentDropDown()
  {
this.classService.GetDepartdropdown().subscribe((res:any)=>{
  this.DepartmentDropdown=res.responseData;
  console.log('getDepartmentDropDown', this.DepartmentDropdown);

})
  }

  onSubmit() {
    console.log('before onSubmit', this.form.value);

    this.classService.updateClass(this.form.value).subscribe((res: any) => {
      if (res.status > 0) {
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }

}
