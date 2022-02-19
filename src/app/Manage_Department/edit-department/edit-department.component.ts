import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  form: FormGroup
  DepartmentID: any
  constructor(private departmentService: DepartmentService, private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.DepartmentID = this.activatedRoute.snapshot.params.Id
    console.log('DepartmentID', this.DepartmentID);

    this.form = this.formBuilder.group({
      departmentID: [],
      departmentName: ['', Validators.required]
    })
    this.loadDepartmentById();
  }

  loadDepartmentById()
  {
    this.departmentService.getDepartmentById(this.DepartmentID).subscribe((res:any)=>{
      this.form.patchValue({
        departmentID:res.responseData['departmentID'],
        departmentName:res.responseData['departmentName']
      });
    })
  }

  onSubmit() {
    console.log('updateDepartment',this.form.value);

    this.departmentService.updateDepartment(this.form.value).subscribe((res: any) => {
      if (res.status > 0) {
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })

  }

}
