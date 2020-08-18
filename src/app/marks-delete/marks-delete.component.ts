import { Component, OnInit } from '@angular/core';
import { marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-delete',
  templateUrl: './marks-delete.component.html',
  styleUrls: ['./marks-delete.component.css']
})
export class MarksDeleteComponent implements OnInit {
  recordId: number;
  statusMessage: String;
  marks1 : marks;
  constructor(private marksService : MarksService) { }

  ngOnInit(): void {
  }

  deleteRecordEntry(){
    this.marks1 = new marks();
    this.marks1.recordID = this.recordId;
    this.marksService.deleteMarksEntry(this.marks1).subscribe(
      response => this.statusMessage = "Grade Entry has been deleted",
      err => this.statusMessage = "Compilation Error"
    )
  }

}
