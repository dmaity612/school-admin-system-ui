import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpaHomeComponent } from './gpa-home/gpa-home.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { MarksAddComponent } from './marks-add/marks-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { MarksEditComponent } from './marks-edit/marks-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { MarksDeleteComponent } from './marks-delete/marks-delete.component';
import { GpaSaveComponent } from './gpa-save/gpa-save.component';
import { CalcRankComponent } from './calc-rank/calc-rank.component';


const routes: Routes = [
  { path: 'home', component: GpaHomeComponent },
  { path: 'addStudent', component: StudentAddComponent },
  { path: 'addCourse', component: CourseAddComponent },
  {path : 'addMarks', component: MarksAddComponent},
  {path : 'editStudent', component: StudentEditComponent},
  {path : 'editCourse', component: CourseEditComponent},
  {path : 'editMarks', component: MarksEditComponent},
  {path : 'deleteStudent', component: StudentDeleteComponent},
  {path : 'deleteCourse', component: CourseDeleteComponent},
  {path : 'deleteMarks', component: MarksDeleteComponent},
  {path : 'calculateGpa', component: GpaSaveComponent},
  {path : 'calcRank', component: CalcRankComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
