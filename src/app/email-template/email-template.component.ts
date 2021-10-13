import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EmailTemplateService } from '../comman/services/EamilTemplate/email-template.service';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements AfterViewInit {
  dataSource: any;
  @ViewChild(MatSort)
	sort!: MatSort;
  constructor(private emailTemplateService: EmailTemplateService) { }
  displayedColumns: string[] = ['templateName', 'templateSubject', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;	
  }

  ngOnInit(): void {
    this.getEmailTemplateList();
  }
  getEmailTemplateList() {
    this.emailTemplateService.allEmailTemplate().subscribe((res: any) => {
      this.dataSource = res.responseData;
      console.log('responseData', this.dataSource);

    })
  }

}
