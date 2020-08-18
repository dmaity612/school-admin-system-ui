import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  studentId : number;
  student : Student;
  statusMessage : String;
  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
  }

  deleteStudentEntry(){
    this.student = new Student()
    this.student.studentId = this.studentId;
    this.studentService.deleteStudent(this.student).subscribe(
      reponse=> this.statusMessage = "Student has been deleted",
      err=> this.statusMessage = "Compilation Error"
    )
  }

}
