import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { marks } from './marks';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }

  addNewMarks(marks1 : marks){
    return this.http.post('http://localhost:8080/gpa/marks/add', marks1);
  }
  deleteMarksEntry(marks1 : marks){
    return this.http.post('http://localhost:8080/gpa/marks/delete', marks1);
  }
}
