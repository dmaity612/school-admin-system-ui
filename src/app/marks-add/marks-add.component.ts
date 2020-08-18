import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';
import { marks } from '../marks';

@Component({
  selector: 'app-marks-add',
  templateUrl: './marks-add.component.html',
  styleUrls: ['./marks-add.component.css']
})
export class MarksAddComponent implements OnInit {
  studentId : number;
  courseId : number;
  semester : number;
  score : number;
  marks1 : marks;
  statusMessage : String;
  constructor(private marksService : MarksService) { }

  ngOnInit(): void {
  }
  saveMarks(){
    this.marks1 = new marks();
    this.marks1.studentID = this.studentId
    this.marks1.courseID = this.courseId;
    this.marks1.semester = this.semester;
    this.marks1.score = this.score;
    this.marksService.addNewMarks(this.marks1).subscribe(
      response => this.statusMessage = "The grade has been added",
      err => this.statusMessage = "The grade was not able to be added"
    )
  }

}
