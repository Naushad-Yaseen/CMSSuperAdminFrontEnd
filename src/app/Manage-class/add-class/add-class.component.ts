import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
form:FormGroup;
DepartmentDropdown:any;
  constructor(private classService:ClassService, private fb:FormBuilder, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      className:['',Validators.required],
      classCode:['',Validators.required],
      studentsLimit:['',Validators.required],
      departmentID:['',Validators.required],
    })
    this.getDepartmentDropDown();
  }

  getDepartmentDropDown()
  {
this.classService.GetDepartdropdown().subscribe((res:any)=>{
  this.DepartmentDropdown=res.responseData;
  console.log('getDepartmentDropDown', this.DepartmentDropdown);

})
  }

  onSubmit()
  {
    this.classService.addClass(this.form.value).subscribe((res:any)=>{
      if(res.status>0){
        this.toaster.success(res.message);
      }
      else{
        this.toaster.error(res.message);
      }
    })
  }

}
