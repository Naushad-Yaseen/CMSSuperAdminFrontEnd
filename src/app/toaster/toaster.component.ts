import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private toaster:ToastrService) { }
  showSuccess(){
    this.toaster.success('Success', 'Toaster Fun!')
  }

  showError(){
    this.toaster.error('Success', 'Error')
  }

  showInfo(){
    this.toaster.info('Success', 'Toaster Info')
  }

  showWarning(){
    this.toaster.warning('Success', 'Toaster Warning')
  }

  ngOnInit(): void {
  }

}
