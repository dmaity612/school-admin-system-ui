import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentID : number;
  name : String;
  address : String;
  grade: number;
  student : Student;
  statusMessage : String;
  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
  }
  editStudent(){
    console.log(this.name);
    console.log(this.address);
    console.log(this.grade);
    this.student = new Student();
    this.student.studentId = this.studentID;
    this.student.studentName = this.name;
    this.student.address = this.address;
    this.student.grade = this.grade;

    this.studentService.addNewStudent(this.student).subscribe(
      repsonse => {
        this.statusMessage = "Student record saved succesfully";
      },
      err => {
        this.statusMessage = "Compilation Error";
      }
    )
  }

}
