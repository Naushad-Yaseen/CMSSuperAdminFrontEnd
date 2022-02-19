import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from "../services/department.service";
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  form: FormGroup;

  constructor(private departmentService: DepartmentService, private FormBuilder: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      departmentName: ['', Validators.required]
    })
  }

  onSubmit() {
    this.departmentService.addDepartment(this.form.value).subscribe((res: any) => {
      if (res.status > 0) {
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })

  }

}
