import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrgService } from '../services/org.service';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.css']
})
export class AddOrgComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder, private orgService: OrgService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      organizationName: ['', Validators.required],
      organizationShortName: ['', Validators.required],
      contactPersonFullName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      contactNumberCountryCode: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      subDomainName: ['', Validators.required],
      organizationType: ['', Validators.required],
      maximumStudentAllowed: ['', Validators.required],
      connectionStringName: ['', Validators.required],
      organizationDatabaseName: ['', Validators.required],
      statusID: ['', Validators.required],

    })
  }
  onSubmit() {

    console.log(' form value', this.form.value);
    this.orgService.addOrg(this.form.value).subscribe(res => {
      console.log('after submit', res);

    })

  }

}
