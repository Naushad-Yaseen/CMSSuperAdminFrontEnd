import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from 'src/app/Manage_Section/services/section.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  form: FormGroup;
  AcademicSessionDropdown:any;
  ClassDropDown: any;
  SectionDropDown: any;
  SectionByClassId: any;
  existEmail: boolean;
  existContactNumber: boolean;
  constructor(private studentService: StudentService, private sectionService:SectionService,
     private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      admissionNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      genderID: ['0', [Validators.required]],
      bloodGroupID: ['0', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      stateID: ['0', Validators.required],
      countryID: ['0', Validators.required],
      city: ['', Validators.required],
      profilePhoto: ['', Validators.required],
      studentSkillID: ['0', Validators.required],
      profileSummary: ['', Validators.required],
      facebookLink: ['', Validators.required],
      linkedInlink: ['', Validators.required],
      contactNumberCountryCode: ['+91', Validators.required],
      studentExtraInfoInJson: ['', Validators.required],
      parentsNumber: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      guardianName: ['', Validators.required],
      parentContact: ['', Validators.required],
      parentEmail: ['', Validators.required],
      guardianContact: ['', Validators.required],
      guardianEmail: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      academicSessionID: ['', Validators.required],
      classID: ['', Validators.required],
      sectionID: ['', Validators.required],
    })
    this.academicSessionDropdown();
    this.classDropDown();
     //this.sectionDropDown();
  }

  onSubmit() {

    this.studentService.addStudent(this.form.value).subscribe((res: any) => {
      if (res.starus == 1) {
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    })
  }

  academicSessionDropdown()
  {
    this.studentService.academicSessionDropDown().subscribe((res:any)=>{
      this.AcademicSessionDropdown=res.responseData;
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

  filterSection(event:any)
  {
    this.studentService.sectionByClassId(event.value).subscribe((res:any)=>{
      this.SectionDropDown=res.responseData;
     console.log('SectionByClassId',this.SectionDropDown);

    })
console.log('filterSection',event);
// console.log('filterSection',event.value);

  }

  onChangeEmail(){
    console.log("hi");

    debugger;
    this.existEmail = false;
    var email = this.form.controls["email"].value
        this.studentService.studentList().subscribe((resp:any) => {
          var data = resp.responseData;

          const found = data.filter((v:any) => v.email === email);
          if(found.length != 0){
            this.existEmail = true;
          }else{
            this.existEmail = false;
          }

        });
  }
  onChangeContactNumber()
  {
    this.existContactNumber = false;
    var contactNumber = this.form.controls["contactNumber"].value
        this.studentService.studentList().subscribe((resp:any) => {
          var data = resp.responseData;

          const found = data.filter((v:any) => v.contactNumber === contactNumber);
          if(found.length != 0){
            this.existContactNumber = true;
          }else{
            this.existContactNumber = false;
          }

        });
  }
}
