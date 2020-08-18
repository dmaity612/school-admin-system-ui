import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GpaHeaderComponent } from './gpa-header/gpa-header.component';
import { GpaMenuComponent } from './gpa-menu/gpa-menu.component';
import { StudentAddComponent } from './student-add/student-add.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseAddComponent } from './course-add/course-add.component';
import { MarksAddComponent } from './marks-add/marks-add.component';
import { GpaHomeComponent } from './gpa-home/gpa-home.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { MarksEditComponent } from './marks-edit/marks-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { MarksDeleteComponent } from './marks-delete/marks-delete.component';
import { GpaSaveComponent } from './gpa-save/gpa-save.component';
import { CalcRankComponent } from './calc-rank/calc-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    GpaHeaderComponent,
    GpaMenuComponent,
    StudentAddComponent,
    CourseAddComponent,
    MarksAddComponent,
    GpaHomeComponent,
    StudentEditComponent,
    CourseEditComponent,
    MarksEditComponent,
    StudentDeleteComponent,
    CourseDeleteComponent,
    MarksDeleteComponent,
    GpaSaveComponent,
    CalcRankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
