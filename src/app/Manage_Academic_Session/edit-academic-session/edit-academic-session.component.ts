import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AcademicSessionService } from '../services/academic-session.service';

@Component({
  selector: 'app-edit-academic-session',
  templateUrl: './edit-academic-session.component.html',
  styleUrls: ['./edit-academic-session.component.css']
})
export class EditAcademicSessionComponent implements OnInit {
  form: FormGroup;
  SessionStatusDropDown: any;
  AcademicSessionID: number;
  constructor(private fb: FormBuilder, private toaster: ToastrService,
     private academicSessionService: AcademicSessionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.AcademicSessionID = this.activatedRoute.snapshot.params.Id;
    console.log("Id is", this.AcademicSessionID);
    this.form = this.fb.group({
      academicSessionID: [],
      academicSessionName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      academicSessionStatusID: ['', Validators.required],
    })
    this.AcademidSessionStatusDropDown();
    this.AcademidSessionById();
  }

  AcademidSessionById()
  {
    this.academicSessionService.getAcademidSessionById(this.AcademicSessionID).subscribe((res:any)=>{
      console.log('AcademidSessionById',res.responseData);

      this.form.patchValue({
        academicSessionID:res.responseData['academicSessionID'],
        academicSessionName:res.responseData['academicSessionName'],
        startDate:res.responseData['startDate'],
        endDate:res.responseData['endDate'],
        academicSessionStatusID:res.responseData['academicSessionStatusID'],
      });
    });
  }

  onSubmit() {
    this.academicSessionService.updateSession(this.form.value).subscribe(res => {
      console.log('addSession', res);

    })
  }

  AcademidSessionStatusDropDown() {
    this.academicSessionService.getAcademidSessionStatus().subscribe((res: any) => {
      this.SessionStatusDropDown = res.responseData;

    })
  }

}
