import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MasterDropDownService } from 'src/app/comman/services/master-drop-down.service';
import { SubscriptionPlanService } from 'src/app/comman/services/subscription-plan.service';

@Component({
  selector: 'app-site-subscription',
  templateUrl: './site-subscription.component.html',
  styleUrls: ['./site-subscription.component.css']
})
export class SiteSubscriptionComponent implements OnInit {
  classToggled = false;
  dataSource: any;
  requestpages: any;
  form: FormGroup;
  Id: number

  constructor(
    private dialog: MatDialog,
    private subscriptionPlanService: SubscriptionPlanService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
    private masterDropdownService: MasterDropDownService
  ) { }
  displayedColumns: string[] = ['planname', 'plantype', 'status', 'pricing', 'actions'];


  ngOnInit(): void {
    //  this.Id=this.activatedRoute.snapshot.params.Id
    // console.log("Id is",this.Id);
    this.SubscriptionPlanList();
  }
  SubscriptionPlanList() {
    this.subscriptionPlanService.getSubscriptionPlanList().subscribe((res: any) => {
      this.dataSource = res.responseData;
      console.log('list', this.dataSource);
    });
  }
  deleteId: any;
  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef, {
      data: id

    });
    this.deleteId = id;
    

  }

  confirmDelete() {
    this.subscriptionPlanService.DeleteSubscriptionPlan(this.deleteId).subscribe((res: any) => {
      // if (res.status > 0) {
      //   this.toaster.success(res.message, 'Success');
      // } else {
      //   this.toaster.error(res.message, 'Error');
      // }
    })

  }


}
