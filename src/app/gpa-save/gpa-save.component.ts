import { Component, OnInit } from '@angular/core';
import { gpaInput } from '../gpaInput';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-gpa-save',
  templateUrl: './gpa-save.component.html',
  styleUrls: ['./gpa-save.component.css']
})
export class GpaSaveComponent implements OnInit {
  studentId : number;
  GpaInput : gpaInput;
  displayStudent : Student;
  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
  }

  saveGpa(){
    this.GpaInput = new gpaInput;
    this.GpaInput.studentId = this.studentId;
    // this.studentService.calculateGpa(this.GpaInput).subscribe(
    //   response => this.statusMessage1 = "Your GPA has been calculated",
    //   err => this.statusMessage1 = "Compilation Error"
    // )
    this.studentService.calculateGpa(this.GpaInput).subscribe( response => {
      this.displayStudent = response;
    }

    )
  }

  // displayGpa(){
  //   this.GpaInput = new gpaInput;
  //   this.GpaInput.studentId = this.studentId;
  //   this.studentService.displayGpa(this.GpaInput).subscribe( response => {
  //     this.displayStudent = response;
  //   }
  //  )
}




