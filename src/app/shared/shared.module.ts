import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import {MatTreeModule} from '@angular/material/tree';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { TreeviewModule } from 'ngx-treeview';



// import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,    
    MatRadioModule,
    MatCheckboxModule,
    CdkTableModule,
    MatSortModule,
    MatTreeModule,
    NgxMatIntlTelInputModule
    //TreeviewModule.forRoot(),

    // RichTextEditorModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,    
    MatRadioModule,
    MatCheckboxModule,
    CdkTableModule,
    MatSortModule,
    MatTreeModule,

    // RichTextEditorModule
  ]
})
export class SharedModule { }
