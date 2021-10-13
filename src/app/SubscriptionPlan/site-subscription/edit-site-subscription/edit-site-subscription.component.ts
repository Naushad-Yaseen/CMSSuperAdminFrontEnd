import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';
import { SubscriptionPlanService } from 'src/app/comman/services/subscription-plan.service';

@Component({
  selector: 'app-edit-site-subscription',
  templateUrl: './edit-site-subscription.component.html',
  styleUrls: ['./edit-site-subscription.component.css']
})
export class EditSiteSubscriptionComponent implements OnInit {

  form: FormGroup;
  subscriptionID: number;
  data: string;
  planTypeDropdown: any;
  planTypeStautusDropdown: any;
  isSubmitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private subscriptionPlanService: SubscriptionPlanService,
    private toaster: ToastrService,
    private masterDropdownService: MasterDropDownService

  ) { }
  ngOnInit(): void {
    debugger;
    this.subscriptionID = this.activatedRoute.snapshot.params.Id;
    console.log('subscriptionID', this.subscriptionID);
    this.form = this.formBuilder.group({
      subscriptionID: [0],
      planID: [0],
      planName: [''],
      price: [null],
      planStatusID: [0],
      numberOfUserAllowed: [null],
    });

    // this.form = this.formBuilder.group({
    //   subscriptionID: [0],
    //   planID: [0],
    //   planName: [''],
    //   price: [],
    //   planStatusID: [0],
    //   numberOfUserAllowed: [],
    // });

    this.masterDropdown();
    this.GetSubscriptionPlanById();
  }

  GetSubscriptionPlanById() {
    debugger;
    this.subscriptionPlanService.GetSubscriptionPlanById(this.subscriptionID).subscribe((res: any) => {
     // this.data = res.responseData;
      console.log('GetSubscriptionPlanById', this.data);
      this.form.patchValue({
        subscriptionID: res.responseData['subscriptionID'],
        planID: res.responseData['planID'],
        planName: res.responseData['planName'],
        price: res.responseData['price'],
        planStatusID: res.responseData['planStatusID'],
        numberOfUserAllowed: res.responseData['numberOfUserAllowed']
      });


    });
  }


  onSubmit() {
    debugger;
    console.log('UpdateSubscriptionPlan', this.form.value);
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      //this.updateSubscription();

      this.subscriptionPlanService.UpdateSubscriptionPlan(this.form.value).subscribe((res: any) => {


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

  // updateSubscription() {
  //   debugger;
  //   this.subscriptionPlanService.UpdateSubscriptionPlan(this.form.value).subscribe((res: any) => {


  //     if (res.status > 0) {
  //       this.toaster.success(res.message);
  //     }
  //     else {
  //       this.toaster.error(res.message);
  //     }

  //   });
  //   console.log('UpdateSubscriptionPlan', this.form.value);
  // }

  masterDropdown() {
    this.masterDropdownService.GetPlanTypeDropdown().subscribe((res: any) => {
      this.planTypeDropdown = res.responseData;
    });
    this.masterDropdownService.GetPlanTypestausDropdown().subscribe((res: any) => {
      this.planTypeStautusDropdown = res.responseData
    })
  }

}
