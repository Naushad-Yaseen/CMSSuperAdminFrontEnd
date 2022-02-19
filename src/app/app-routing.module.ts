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
// import { AddOrganizationComponent } from './Organization-Setup/add-organization/add-organization.component';
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
import { AddOrgComponent } from './Org_Setup/add-org/add-org.component';
import { OrgListComponent } from './Org_Setup/org-list/org-list.component';
import { EditOrgComponent } from './Org_Setup/edit-org/edit-org.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { RNDComponent } from './rnd/rnd.component';
import { AddAcademicSessionComponent } from './Manage_Academic_Session/add-academic-session/add-academic-session.component';
import { EditAcademicSessionComponent } from './Manage_Academic_Session/edit-academic-session/edit-academic-session.component';
import { AcademicSessionListComponent } from './Manage_Academic_Session/academic-session-list/academic-session-list.component';
import { DepartmentListComponent } from './Manage_Department/department-list/department-list.component';
import { AddDepartmentComponent } from './Manage_Department/add-department/add-department.component';
import { EditDepartmentComponent } from './Manage_Department/edit-department/edit-department.component';
import { AddClassComponent } from './Manage-class/add-class/add-class.component';
import { ClassListComponent } from './Manage-class/class-list/class-list.component';
import { EditClassComponent } from './Manage-class/edit-class/edit-class.component';
import { AddSectionComponent } from './Manage_Section/add-section/add-section.component';
import { EditSectionComponent } from './Manage_Section/edit-section/edit-section.component';
import { SectionIlstComponent } from './Manage_Section/section-ilst/section-ilst.component';
import { SubjectDetailsComponent } from './Manage-Subject/subject-details/subject-details.component';
import { AddStudentComponent } from './Manage-student/add-student/add-student.component';
import { StudentListComponent } from './Manage-student/student-list/student-list.component';
import { EditStudentComponent } from './Manage-student/edit-student/edit-student.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'rnd', component: RNDComponent },
  {
    path: 'dash', component: LayoutsComponent,

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
      { path: 'add-student', component: AddStudentComponent },
      { path: 'edit-student/:Id', component: EditStudentComponent },
      { path: 'student-list', component: StudentListComponent },
      { path: 'subject', component: SubjectDetailsComponent },
      { path: 'add-section', component: AddSectionComponent },
      { path: 'edit-section/:Id', component: EditSectionComponent },
      { path: 'section-list', component: SectionIlstComponent },
      { path: 'add-class', component: AddClassComponent },
      { path: 'class-list', component: ClassListComponent },
      { path: 'edit-class/:Id', component: EditClassComponent },
      { path: 'department-list', component: DepartmentListComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'edit-department/:Id', component: EditDepartmentComponent },

      {
        path: 'AcademicSessionList',
        component: AcademicSessionListComponent,
      },
      {
        path: 'AddAcademicSession',
        component: AddAcademicSessionComponent,
      },
      {
        path: 'AddAcademicSession',
        component: AddAcademicSessionComponent,
      },
      {
        path: 'editAcademicSession/:Id',
        component: EditAcademicSessionComponent,
      },
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
        path: 'org-List',
        component: OrgListComponent
        //canActivate:[AuthGuardService]
      },
      {
        path: 'add-organization',
        component: AddOrganizationsComponent,
      },
      {
        path: 'add-org',
        component: AddOrgComponent,
      },
      {
        path: 'edit-organization/:Id',
        component: EditOrganizationComponent,
      },
      {
        path: 'edit-org/:Id',
        component: EditOrgComponent,
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
