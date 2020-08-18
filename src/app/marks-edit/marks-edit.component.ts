import { Component, OnInit } from '@angular/core';
import { marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-edit',
  templateUrl: './marks-edit.component.html',
  styleUrls: ['./marks-edit.component.css']
})
export class MarksEditComponent implements OnInit {
  studentId : number;
  courseId : number;
  semester : number;
  score : number;
  marks1 : marks;
  recordId : number;
  statusMessage : String;
  constructor(private marksService : MarksService) { }

  ngOnInit(): void {
  }

  editMarks(){
    this.marks1 = new marks();
    this.marks1.recordID = this.recordId,
    this.marks1.studentID = this.studentId
    this.marks1.courseID = this.courseId;
    this.marks1.semester = this.semester;
    this.marks1.score = this.score;
    this.marksService.addNewMarks(this.marks1).subscribe(
      response => this.statusMessage = "The grade has been updated",
      err => this.statusMessage = "The grade was not able to be updated"
    )
  }

}
