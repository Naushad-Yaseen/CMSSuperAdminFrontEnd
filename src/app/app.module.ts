import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LayoutsComponent } from './layouts/layouts.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TreeviewModule } from 'ngx-treeview';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from './shared/shared.module';
import { EmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/email-subscription.component';
import { AddEmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/add-email-subscription/add-email-subscription.component';
import { EditEmailSubscriptionComponent } from './SubscriptionPlan/email-subscription/edit-email-subscription/edit-email-subscription.component';
import { SiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/site-subscription.component';
import { AddSiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/add-site-subscription/add-site-subscription.component';
import { EditSiteSubscriptionComponent } from './SubscriptionPlan/site-subscription/edit-site-subscription/edit-site-subscription.component';
import { SmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/sms-subscription.component';
import { AddSmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/add-sms-subscription/add-sms-subscription.component';
import { EditSmsSubscriptionComponent } from './SubscriptionPlan/sms-subscription/edit-sms-subscription/edit-sms-subscription.component';
import { AddOrganizationsComponent } from './Manage-organizations/add-organizations/add-organizations.component';
import { OrganizationListComponent } from './Manage-organizations/organization-list/organization-list.component';
import { ToasterComponent } from './toaster/toaster.component';
import {MatIconModule} from '@angular/material/icon';
// import { EditOrganizationComponent } from './Manage-Organizations/edit-organization/edit-organization.component';
import { EditOrganizationComponent } from './Manage-organizations/edit-organization/edit-organization.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AddAdminComponent } from './admin-user/add-admin/add-admin.component';
import { EditAdminComponent } from './admin-user/edit-admin/edit-admin.component';
import { ViewAdminComponent } from './admin-user/view-admin/view-admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { EditEmailTemplateComponent } from './email-template/edit-email-template/edit-email-template.component';
import { EmailPlaceHolderComponent } from './email-template/email-place-holder/email-place-holder.component';
import { TextEditerComponent } from './email-template/text-editer/text-editer.component';
import { AddEmailTemplateComponent } from './email-template/add-email-template/add-email-template.component';
import { AddOrgComponent } from './Org_Setup/add-org/add-org.component';
import { OrgListComponent } from './Org_Setup/org-list/org-list.component';
import { EditOrgComponent } from './Org_Setup/edit-org/edit-org.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { RNDComponent } from './rnd/rnd.component';
import { AddAcademicSessionComponent } from './Manage_Academic_Session/add-academic-session/add-academic-session.component';
import { EditAcademicSessionComponent } from './Manage_Academic_Session/edit-academic-session/edit-academic-session.component';

import { AcademicSessionListComponent } from './Manage_Academic_Session/academic-session-list/academic-session-list.component';
import { AddDepartmentComponent } from './Manage_Department/add-department/add-department.component';
import { EditDepartmentComponent } from './Manage_Department/edit-department/edit-department.component';
import { DepartmentListComponent } from './Manage_Department/department-list/department-list.component';
import { AddClassComponent } from './Manage-class/add-class/add-class.component';
import { EditClassComponent } from './Manage-class/edit-class/edit-class.component';
import { ClassListComponent } from './Manage-class/class-list/class-list.component';
import { AddSectionComponent } from './Manage_Section/add-section/add-section.component';
import { EditSectionComponent } from './Manage_Section/edit-section/edit-section.component';
import { SectionIlstComponent } from './Manage_Section/section-ilst/section-ilst.component';
import { SubjectDetailsComponent } from './Manage-Subject/subject-details/subject-details.component';
import { AddStudentComponent } from './Manage-student/add-student/add-student.component';
import { EditStudentComponent } from './Manage-student/edit-student/edit-student.component';
import { StudentListComponent } from './Manage-student/student-list/student-list.component';
import { SearchPipe } from './shared/search.pipe';
 import { UselessPipePipe } from '../app/shared/useless-pipe.pipe';

//import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,

    LayoutsComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    EmailSubscriptionComponent,
    AddEmailSubscriptionComponent,
    EditEmailSubscriptionComponent,
    SiteSubscriptionComponent,
    AddSiteSubscriptionComponent,
    EditSiteSubscriptionComponent,
    SmsSubscriptionComponent,
    AddSmsSubscriptionComponent,
    EditSmsSubscriptionComponent,
    AddOrganizationsComponent,
    OrganizationListComponent,
    ToasterComponent,
    EditOrganizationComponent,
    AdminUserComponent,
    AddAdminComponent,
    EditAdminComponent,
    ViewAdminComponent,
    EmailTemplateComponent,
    EditEmailTemplateComponent,
    EmailPlaceHolderComponent,
    TextEditerComponent,
    AddEmailTemplateComponent,
    AddOrgComponent,
    OrgListComponent,
    EditOrgComponent,
    LoginComponent,
    ChangePasswordComponent,
    RNDComponent,
    AddAcademicSessionComponent,
    EditAcademicSessionComponent,

    AcademicSessionListComponent,
     AddDepartmentComponent,
     EditDepartmentComponent,
     DepartmentListComponent,
     AddClassComponent,
     EditClassComponent,
     ClassListComponent,
     AddSectionComponent,
     EditSectionComponent,
     SectionIlstComponent,
     SubjectDetailsComponent,
     AddStudentComponent,
     EditStudentComponent,
     StudentListComponent,
SearchPipe,
UselessPipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatFormFieldModule, MatInputModule,MatDialogModule,NgxMatIntlTelInputModule,
    BrowserAnimationsModule,
    SharedModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  CKEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ImageCropperModule,
    MatNativeDateModule,
    RichTextEditorAllModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    TreeviewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
