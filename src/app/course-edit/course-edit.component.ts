import { Component, OnInit } from '@angular/core';
import { course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  subjectName : String;
  teacherName : String;
  gpaLevel : number;
  course1 : course;
  courseID : number;
  statusMessage : String;
  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
  }


  editCourse(){
    this.course1 = new course();
    this.course1.courseID = this.courseID;
    this.course1.subject = this.subjectName;
    this.course1.teacher = this.teacherName;
    this.course1.level = this.gpaLevel;
    this.courseService.addNewCourse(this.course1).subscribe(
      response => this.statusMessage = "Course has been edited",
      err => this.statusMessage = "Did not save"
    )
  }

}
