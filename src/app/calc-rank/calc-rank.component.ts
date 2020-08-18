import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student.model';
import { gpaInput } from '../gpaInput';

@Component({
  selector: 'app-calc-rank',
  templateUrl: './calc-rank.component.html',
  styleUrls: ['./calc-rank.component.css']
})
export class CalcRankComponent implements OnInit {
  numRank : number;
  listStudents : Student[];
  GpaInput : gpaInput
  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
  }

  generateRanks(){
    this.GpaInput = new gpaInput();
    this.GpaInput.numRank = this.numRank;
    this.studentService.calculateRanks(this.GpaInput).subscribe( response =>{
      this.listStudents = response;
    }
    )
  }

}
