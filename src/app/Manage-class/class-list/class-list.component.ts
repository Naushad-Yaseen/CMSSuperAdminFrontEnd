import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  dataSource:any
  constructor(private classService:ClassService, private toaster: ToastrService, private dialog: MatDialog) { }
  displayedColumns:string[]=['ClassName','classCode','studentsLimit','actions',]
  ngOnInit(): void {
    this.loadClass();
  }
loadClass()
{
  this.classService.GetClassList().subscribe((res:any)=>{
    this.dataSource=res.responseData;
  })
}

deleteId: any;
  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.deleteId = id;
    console.log("id", this.deleteId);
  }

  confirmDelete() {
    this.classService.DeleteClass(this.deleteId).subscribe((res: any) => {
      if (res.status > 0)
        this.toaster.success(res.message);
      else {
        this.toaster.error(res.message);
      }
      this.loadClass();
    })


  }
}
