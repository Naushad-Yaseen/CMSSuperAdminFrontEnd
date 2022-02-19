import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from 'src/app/Manage_Section/services/section.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  form: FormGroup;
  StudentID: number;
  AcademicSessionDropdown:any;
  ClassDropDown: any;
  SectionDropDown: any;
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute,
    private sectionService:SectionService,
    private fb: FormBuilder, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.StudentID = this.activatedRoute.snapshot.params.Id;
    console.log("StudentID", this.StudentID);

    this.form = this.fb.group({
      studentID: [],
      admissionNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      genderID: ['', [Validators.required]],
      bloodGroupID: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      stateID: ['', Validators.required],
      countryID: ['', Validators.required],
      city: ['', Validators.required],
      profilePhoto: ['', Validators.required],
      studentSkillID: ['', Validators.required],
      profileSummary: ['', Validators.required],
      facebookLink: ['', Validators.required],
      linkedInlink: ['', Validators.required],
      contactNumberCountryCode: ['', Validators.required],
      studentExtraInfoInJson: ['', Validators.required],
      parentsNumber: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      guardianName: ['', Validators.required],
      parentContact: ['', Validators.required],
      parentEmail: ['', Validators.required],
     // guardianContact: ['', Validators.required],
      guardianEmail: ['', Validators.required],
      academicSessionID: ['', Validators.required],
      classID: ['', Validators.required],
      sectionID: ['', Validators.required],
    })
    this.academicSessionDropdown();
    this.classDropDown();
    this.sectionDropDown();
    this.getStudentParentById()
  }
  getStudentParentById() {
    this.studentService.StudentParentById(this.StudentID).subscribe((res: any) => {
      console.log("getStudentById", res.responseData);
      this.form.patchValue({
        studentID: res.responseData['studentID'],
        academicSessionID: res.responseData['academicSessionID'],
        classID: res.responseData['classID'],
        sectionID: res.responseData['sectionID'],
        admissionNumber: res.responseData['admissionNumber'],
        firstName: res.responseData['firstName'],
        middleName: res.responseData['middleName'],
        lastName: res.responseData['lastName'],
        contactNumber: res.responseData['contactNumber'],
        genderID: res.responseData['genderID'],
        bloodGroupID: res.responseData['bloodGroupID'],
        email: res.responseData['email'],
        dateOfBirth: res.responseData['dateOfBirth'],
        address: res.responseData['address'],
        zipCode: res.responseData['zipCode'],
        stateID: res.responseData['stateID'],
        countryID: res.responseData['countryID'],
        city: res.responseData['city'],
        profilePhoto: res.responseData['profilePhoto'],
        studentSkillID: res.responseData['studentSkillID'],
        studentExtraInfoInJson: res.responseData['studentExtraInfoInJson'],
        profileSummary: res.responseData['profileSummary'],
        facebookLink: res.responseData['facebookLink'],
        linkedInlink: res.responseData['linkedInlink'],
        contactNumberCountryCode: res.responseData['contactNumberCountryCode'],
        parentsNumber: res.responseData['parentsNumber'],
        fatherName: res.responseData['fatherName'],
        motherName: res.responseData['motherName'],
        guardianName: res.responseData['guardianName'],
        parentContact: res.responseData['parentContact'],
        parentEmail: res.responseData['parentEmail'],
       // guardianContact: res.responseData['guardianContact'],
        guardianEmail: res.responseData['guardianEmail'],
        // password: res.responseData['password'],
        // userName: res.responseData['userName'],
      })
    })
  }


  onSubmit() {
    this.studentService.updateStudent(this.form.value).subscribe((res: any) => {
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

}
