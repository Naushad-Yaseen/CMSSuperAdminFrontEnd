import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AcademicSessionService } from "../services/academic-session.service";
@Component({
  selector: 'app-add-academic-session',
  templateUrl: './add-academic-session.component.html',
  styleUrls: ['./add-academic-session.component.css']
})
export class AddAcademicSessionComponent implements OnInit {
  form: FormGroup;
  SessionStatusDropDown: any;
  constructor(private fb: FormBuilder, private toaster: ToastrService, private academicSessionService: AcademicSessionService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      academicSessionName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      academicSessionStatusID: ['', Validators.required],
    })

    this.AcademidSessionStatusDropDown();
  }

  onSubmit() {
    this.academicSessionService.addSession(this.form.value).subscribe((res: any) => {
      console.log('addSession', res);
      if (res.status > 0) {
        this.toaster.success(res.message);
      }else{
        this.toaster.error(res.message);
      }

    })
    this.form.reset();
  }
  AcademidSessionStatusDropDown() {
    this.academicSessionService.getAcademidSessionStatus().subscribe((res: any) => {
      this.SessionStatusDropDown = res.responseData;
    })
  }

}
