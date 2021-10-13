import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';
import { SubscriptionPlanService } from 'src/app/comman/services/subscription-plan.service';

@Component({
  selector: 'app-add-site-subscription',
  templateUrl: './add-site-subscription.component.html',
  styleUrls: ['./add-site-subscription.component.css']
})
export class AddSiteSubscriptionComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;
  planTypeDropdown: any;
  planTypeStautusDropdown: any;
  constructor(
    private formBuilder: FormBuilder,
    private subscriptionPlanService: SubscriptionPlanService,
    private toaster: ToastrService,
    private masterDropdownService: MasterDropDownService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      planID: ['', Validators.required],
      planName: ['', Validators.required],
      price: [null, Validators.required],
      planStatusID: ['', Validators.required],
      numberOfUserAllowed: [null, Validators.required],
    });
    this.masterDropdown();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.subscriptionPlanService.AddSubscriptionPlan(this.form.value).subscribe((res: any) => {
        if (res.status > 0) {
          this.toaster.success(res.message);
        }
        else {
          this.toaster.error(res.message);
        }
      });
    }

    this.form.reset();
    this.form.controls.planID.clearValidators();
    this.form.controls.planName.clearValidators();
    this.form.controls.price.clearValidators();
    this.form.controls.planStatusID.clearValidators();
    this.form.controls.numberOfUserAllowed.clearValidators();
  }

  masterDropdown() {
    this.masterDropdownService.GetPlanTypeDropdown().subscribe((res: any) => {
      this.planTypeDropdown = res.responseData;
      console.log('plan type drop down', this.planTypeDropdown);

    });

    this.masterDropdownService.GetPlanTypestausDropdown().subscribe((res: any) => {
      this.planTypeStautusDropdown = res.responseData;
      console.log('getPlanTypeStatusDropdown is: ', this.planTypeStautusDropdown);
    });

  }

}
