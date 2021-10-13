import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './admin-user/add-admin/add-admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { EditAdminComponent } from './admin-user/edit-admin/edit-admin.component';
import { ViewAdminComponent } from './admin-user/view-admin/view-admin.component';
import { EditEmailTemplateComponent } from './email-template/edit-email-template/edit-email-template.component';
import { EmailPlaceHolderComponent } from './email-template/email-place-holder/email-place-holder.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AddOrganizationsComponent } from './Manage-organizations/add-organizations/add-organizations.component';
import { EditOrganizationComponent } from './Manage-organizations/edit-organization/edit-organization.component';

import { OrganizationListComponent } from './Manage-organizations/organization-list/organization-list.component';
import { AddEmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/add-email-subscription/add-email-subscription.component';
import { EditEmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/edit-email-subscription/edit-email-subscription.component';
import { EmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/email-subscription.component';
import { AddSiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/add-site-subscription/add-site-subscription.component';
import { EditSiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/edit-site-subscription/edit-site-subscription.component';
import { SiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/site-subscription.component';
import { AddSmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/add-sms-subscription/add-sms-subscription.component';
import { EditSmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/edit-sms-subscription/edit-sms-subscription.component';
import { SmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/sms-subscription.component';
import { ToasterComponent } from './toaster/toaster.component';


const routes: Routes = [
  
  {
    path:'',component:LayoutsComponent,

    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard',
      //   pathMatch: 'full'
      // },      
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      // }, 
      // {
      //   path: 'manage-staff',
      //   component: ManageAdminsComponent, canActivate:[AuthGuardService]
      // }, 
      {
        path: 'toaster',
        component: ToasterComponent,
      },
      {
        path: 'add-staff',
        component: AddAdminComponent,
        // canActivate:[AuthGuardService]
      },
      {
       // path: 'view-staff/:Id',
        path: 'admin-user',
        component: AdminUserComponent,
        // canActivate:[AuthGuardService]
      },
      {
        path: 'edit-staff',
        component: EditAdminComponent,
      },
      {
        path: 'view-staff/:Id',
        component: ViewAdminComponent,
      },
      {
        path: 'organization-List',
        component: OrganizationListComponent, 
        //canActivate:[AuthGuardService]
      },
      {
        path: 'add-organization',
        component: AddOrganizationsComponent, 
      },
      {
        path: 'edit-organization/:Id',
        component: EditOrganizationComponent,
      },
      {
        path: 'subscription-plan',
        component: SiteSubscriptionComponent,
      },
      {
        path: 'add-subscription-plan',
        component: AddSiteSubscriptionComponent,
      },
      {
        path: 'edit-subscription-plan/:Id',
        component: EditSiteSubscriptionComponent,
      },
      {
        path: 'sms-subs',
        component: SmsSubscriptionComponent,
      },
      {
        path: 'add-sms-subs',
        component: AddSmsSubscriptionComponent,
      },         
      {
        path: 'email-subs',
        component: EmailSubscriptionComponent,
      },
      {
        path: 'add-email-subs',
        component: AddEmailSubscriptionComponent,
      },     
      {
        path: 'edit-subscription/:Id',
        component: EditSiteSubscriptionComponent,
      },     
      {
        path: 'edit-sms-subs',
        component: EditSmsSubscriptionComponent,
      },     
      {
        path: 'edit-email-subs',
        component: EditEmailSubscriptionComponent,
      },       
      // {
      //   path: 'manage-role',
      //   component: RoleAndPermissionsComponent,
      // },     
      // {
      //   path: 'add-role',
      //   component: AddRoleAndPermissionComponent,
      // },  
      // {
      //   path: 'edit-role',
      //   component: EditRoleAndPermissionComponent,
      // },  
      {
        path: 'email-templates',
        component: EmailTemplateComponent,
      },    
     
      {
        path: 'edit-template/:Id',
        component: EditEmailTemplateComponent,
      },  
      {
        path: 'placeholder',
        component: EmailPlaceHolderComponent,
      },      
      // {
      //   path: 'enquiries',
      //   component: InquiryComponent,
      // }, 
      // {
      //   path: 'content-management',
      //   component: ContentManagementComponent,
      // },  
      // {
      //   path: 'text',
      //   component: TextEditorComponent,
      // },   
      
      // {
      //   path: 'transactions',
      //   component: TransactionListComponent,
      // }, 
      
      // {
      //   path: 'enquiry-details/:Id',
      //   component: InqueryDetailComponent,
      // },   
      // {
      //   path: 'transaction-details/:Id',
      //   component: TransactionDetailsComponent,
      // },   
    ]  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
