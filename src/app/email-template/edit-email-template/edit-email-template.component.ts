import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { ToastrService } from 'ngx-toastr';
import { EmailTemplateService } from 'src/app/comman/services/EamilTemplate/email-template.service';

@Component({
  selector: 'app-edit-email-template',
  templateUrl: './edit-email-template.component.html',
  styleUrls: ['./edit-email-template.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class EditEmailTemplateComponent implements OnInit {
  emailTemplateId: number;
  form: FormGroup;
  data: any;
  @ViewChild('textEditorValue')
    private rteEle: RichTextEditorComponent;
  constructor(
    private emailTemplateService: EmailTemplateService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.emailTemplateId = this.activatedRoute.snapshot.params.Id;
    // console.log(this.emailTemplateId);
    this.form = this.formBuilder.group({
      emailTemplateID: [0],
      templateName: ['', Validators.required],
      templateSubject: ['', Validators.required],
      emailFrom: [null, Validators.required],
      contents: ['', Validators.required],
    });

    this.GetEmailTemplate();

  }
  GetEmailTemplate() {
    this.emailTemplateService.getEmailTemplateById(this.emailTemplateId).subscribe((res: any) => {
      this.form.patchValue({
        emailTemplateID: res.responseData['emailTemplateID'],
        templateName: res.responseData['templateName'],
        templateSubject: res.responseData['templateSubject'],
        emailFrom: res.responseData['emailFrom'],
        contents: res.responseData['contents'],
      });
      this.data = res;
      console.log("sae", this.data)
    });
  }
  onSubmit() {
    this.updateEmailTemlate();
  }

  updateEmailTemlate() {
    this.emailTemplateService.updateEmailTemplate(this.form.value).subscribe((res: any) => {
      if (res.status > 0) {
        this.toaster.success(res.message);
        this.router.navigate(['/email-templates']);
      }
      else {
        this.toaster.error(res.message);
      }

    })
  }

}
