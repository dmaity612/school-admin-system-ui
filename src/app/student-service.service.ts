import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { gpaInput } from './gpaInput';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http : HttpClient) { }

  addNewStudent(person : Student){
    return this.http.post('http://localhost:8080/gpa/student/add',person);
  }

  deleteStudent(person : Student){
    return this.http.post('http://localhost:8080/gpa/student/delete',person);
  }
  calculateGpa (id : gpaInput){
    return this.http.post<Student>('http://localhost:8080/gpa/saveGpa',id);
  }
  // displayGpa (id : gpaInput){
  //   return this.http.post<Student>('http://localhost:8080/gpa/showGpa',id);
  // }
  calculateRanks (id : gpaInput){
    return this.http.post<Student[]>('http://localhost:8080/gpa/calculateRank',id);
  }
}
