import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  addNewCourse(course1 : course){
    return this.http.post('http://localhost:8080/gpa/course/add',course1);
  }
  deleteCourse (course1 : course){
    return this.http.post('http://localhost:8080/gpa/course/delete',course1);
  }
}
