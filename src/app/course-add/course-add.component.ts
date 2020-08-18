import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { course } from '../course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  subjectName : String;
  teacherName : String;
  gpaLevel : number;
  course1 : course;
  statusMessage : String;

  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
  }

  saveCourse(){
    this.course1 = new course();
    this.course1.subject = this.subjectName;
    this.course1.teacher = this.teacherName;
    this.course1.level = this.gpaLevel;
    this.courseService.addNewCourse(this.course1).subscribe(
      response => this.statusMessage = "Course has been added",
      err => this.statusMessage = "Did not save"
    )
  }

}
