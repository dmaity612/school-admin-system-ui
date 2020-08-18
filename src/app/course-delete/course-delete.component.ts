import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { course } from '../course';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  courseId : number;
  statusMessage : String;
  course1 : course;
  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
  }

  deleteCourseEntry(){
    this.course1 = new course();
    this.course1.courseID = this.courseId;
    this.courseService.deleteCourse(this.course1).subscribe(
      response=> this.statusMessage = "Course has been deleted",
      err=> this.statusMessage = "Compilation Error"
    )
  }

}
