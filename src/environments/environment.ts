// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // baseUrl:'https://localhost:44390',
    baseUrl:'http://localhost:17808',
 //baseUrl: 'https://ms.stagingsdei.com:8003',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const organization={

  addOrganizationAPI: '/api/Organization/AddOrganization',
  updateOrganizationAPI: '/api/Organization/UpdateOrganization',
  getOrganizationListAPI:'/api/Organization/GetOrganizationsList',
  deleteOrganizationListAPI:'/api/Organization/DeleteOrganization',
  getOrganizationByIdAPI:'/api/Organization/GetOrganizationListById',

};

export const siteSubscriptionPlan={
  addSubscriptionPlanAPI:'/api/SubscriptionPlan/CreateSubscriptionPlan',
  allSubscriptionPlanAPI:'/api/SubscriptionPlan/GetSubscriptionPlanList',
  updateSubscriptionPlanAPI:'/api/SubscriptionPlan/Update',
  getSubscriptionPlanByIdAPI:'/api/SubscriptionPlan/GetSubscriptionPlantById',
  deleteSubscriptionPlanAPI:'/api/SubscriptionPlan/Delete'
};
export const roles={
  allSubscriptionPlanAPI:'/api/Roles/GetRolesList',
  getRolesDropdown:'/api/Master/RolesDropdown',
  GetRoleScreens:'/api/Roles/GetRoleScreens',
  postRole:'/api/Roles',
};

// done
export const emailTemplate={
  allEmailTemplateAPI:'/api/EmailTemplate/GetEmailTemplate',
  EmailTemplateByIdAPI:'/api/EmailTemplate/GetEmailTemplateById',

  updateEmailTemplateAPI:'/api/EmailTemplate/UpdateEmailTemplate',
};

export const adminUsers={
  alladminUsersAPI:'/api/AdminUser/GetAdminUserList',
  GetRoleDropDownAPI:'/api/AdminUser/GetRoleDropDown',
  getStateDropDownAPI:'/api/AdminUser/stateDropDown',
  getBloodGroupDropdown:'/api/AdminUser/bloodGroupDropDown',
  GetAdminUserListById:'/api/AdminUser/GetAdminUserListById',
  getAdminUserViewAPI:'/api/AdminUser/GetAdminUserViewList',
  getAdminUserViewByIdAPI:'/api/AdminUser/GetAdminUserViewList',
  getEmailTemplateByIdAPI:'/api/EmailTemplate/',
  updateEmailTemplateAPI:'/api/EmailTemplate/',
  addStaffAPI: '/api/AdminUser/AddAdminUser',
  getStaffByIdAPI:'/api/AdminUsers/',
  updateStaffAPI:'/api/AdminUsers/Update',
  deleteStaffAPI:'/api/AdminUsers/Delete',
};

export const masters={
getCountryDropdown:'/api/Organization/SelectCountry',
getEmailSubscriptionPlanDropdown:'/api/EmailSubscriptionPlan/SelectEmailSubscriptionPlan',
selectNumberOfStudentsDropDown:'/api/Organization/SelectNumberOfStudent',
getOrganizationTypeDropdown:'/api/Organization/GetOrganizationsType',
SelectSMSSubscriptionPlanDropDown:'/api/Organization/SelectSMSSubscriptionPlan',
SelectStatusDropDown:'/api/Organization/StatusDropDown',
getStateDropdown:'/api/Master/StateDropdown',
getBloodGroupDropdown:'/api/Master/BloodGroupDropdown',
getPlanTypeDropdown:'/api/SubscriptionPlan/GetPlanType',
getPlanTypeStatusDropdown:'/api/SubscriptionPlan/GetPlanTypeStatus',
getGenderDropdownDropdown:'/api/Master/GenderDropdown',
};


export const profile={
  getProfilePhoto:'/api/Account/UploadPhoto'
};


export const Transaction={
  allTransactionAPI:'/api/Transaction/GetTransactionList',
  getTransactionDetailsByIdAPI:'/api/Transaction/'
};

export const AccountLogin={
  loginAPI:'/api/Account/login',
};

export const Enquiries={
  getEnquiriesList:'/api/Enquiry/GetEnquiriesList',
  getEnquiryDetailsByIdList:'/api/Enquiry/',
  allowedDemoAPI : '/api/Enquiry/AllowedDemo',
  denyDemoAPI : '/api/Enquiry/DenyDemo',
  sendResponseAPI:'/api/Enquiry/EnquiryResponse'
};
export const ViewAdminMasters={
  getAdminList:'/api/AdminUsers/AdminDetails',


}

export const Student={
  getstudentDetailByAcademicIdClassIdSectionId:'/api/Student/getStudentDetailsByClassIdSectionIdAcademicId'
}
