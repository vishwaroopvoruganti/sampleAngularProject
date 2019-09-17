import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getStudents(){
   return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    //console.log("Get Students working");
  }
}
