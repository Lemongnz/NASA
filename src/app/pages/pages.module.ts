import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule
  ]
})
export class PagesModule { }
