import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.css']
})
export class EmailSubscriptionComponent implements AfterViewInit {

  classToggled = false;

  public toggleField() {
    this.classToggled = !this.classToggled;  
  }
  
  @ViewChild(MatSort)
	sort!: MatSort;
  constructor(private dialog: MatDialog) { }
  displayedColumns: string[] = ['planname', 'emailPack', 'status', 'pricing', 'actions'];
    // dataSource = ELEMENT_DATA;
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;	
  }

  actionDialogPopup(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
}

export interface PeriodicElement {
  planname:string;
  emailPack: string;
  status:string;
  pricing:string
	actions: any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
	{ planname:'ABC', emailPack: '1000/Day', status: 'Active', pricing: '65',  actions: 'Active'},
  ];


