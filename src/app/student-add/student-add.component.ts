import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  name : String;
  address : String;
  grade: number;
  student : Student;
  statusMessage : String;
  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    console.log(this.name);
    console.log(this.address);
    console.log(this.grade);
    this.student = new Student();
    this.student.studentName = this.name;
    this.student.address = this.address;
    this.student.grade = this.grade;

    this.studentService.addNewStudent(this.student).subscribe(
      repsonse => {
        this.statusMessage = "Student record saved succesfully";
      },
      err => {
        this.statusMessage = "Compilation";
      }
    )
    
  }

}
