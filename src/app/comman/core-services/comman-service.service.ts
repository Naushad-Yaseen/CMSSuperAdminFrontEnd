import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {

  constructor() { }
   /** Allow only Number */
  allowOnlyNumber(res:any) {
    const regexp = new RegExp('^([0-9])$');
    const result = regexp.test(res.key);
    if (!result) {
      res.preventDefault();
      return false;
    }else{
      return true
    }
  }
   // Allow only alphabet
   allowAlphabetOnly(res:any) {
    const regexp = new RegExp('^[0-9!@#$&()\\-`.+,/\"]*$');
    const result = regexp.test(res.key);
    if (result) {
      res.preventDefault();
      return false;
    }else{
      return true
    }
  }
}
