import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
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
  // selection: any;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);

  constructor(private academicsessionService: AcademicSessionService, private toaster: ToastrService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['select','AcademicSessionName', 'StartDate', 'EndDate', 'lock/unlock', 'actions',];

  ngOnInit(): void {
    this.loadAcademidSessionList();

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach((row:any) => this.selection.select(row));
  }

  loadAcademidSessionList() {
    this.academicsessionService.getAcademidSessionList().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<any>(res.responseData) ;
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
