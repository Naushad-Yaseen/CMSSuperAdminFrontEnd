import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';
import { AcademicSessionService } from '../services/academic-session.service';

@Component({
  selector: 'app-academic-session-list',
  templateUrl: './academic-session-list.component.html',
  styleUrls: ['./academic-session-list.component.css']
})
export class AcademicSessionListComponent implements OnInit {
  dataSource: any;
  useDefault: boolean;

  constructor(private academicsessionService: AcademicSessionService, private toaster: ToastrService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['AcademicSessionName', 'StartDate', 'EndDate', 'lock/unlock', 'actions',];

  ngOnInit(): void {
    this.loadAcademidSessionList();

  }

  loadAcademidSessionList() {
    this.academicsessionService.getAcademidSessionList().subscribe((res: any) => {
      this.dataSource = res.responseData;
      console.log('AcademidSessionList', this.dataSource);

    })
  }


  deleteId: any;
  actionDialogPopup(templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.deleteId = id;
    console.log("id", this.deleteId);
  }

  confirmDelete() {
    this.academicsessionService.DeleteAcademidSession(this.deleteId).subscribe((res: any) => {
      if (res.status > 0)
        this.toaster.success(res.message);
      else {
        this.toaster.error(res.message);
      }
      this.loadAcademidSessionList();
    })


  }
  lockUnlockId: any;
  lockUnlocktoggle(event: MatSlideToggleChange, templateRef: TemplateRef<any>, id: any) {
    this.dialog.open(templateRef);
    this.lockUnlockId = id;
    //this.useDefault = event.checked;
    //console.log('Toggle fired',this.useDefault);
    // console.log('Toggle fired',event);
    //this.lockUnlockAcademicSession(id)
  }

  confirmLockUnlock() {
    this.lockUnlockAcademicSession(this.lockUnlockId)
  }
  unlockCon: boolean;
  lockUnlockAcademicSession(id: any) {
    console.log('id', id);
    this.academicsessionService.getLockUnlockAcademidSession(id).subscribe((res: any) => {
      console.log('lockUnlockAcademicSession', res);
      if (res.responseData == false) {
        this.toaster.success(res.message);
        this.unlockCon = false;

      } else {
        this.toaster.success(res.message);
      }
    })
  }
}
