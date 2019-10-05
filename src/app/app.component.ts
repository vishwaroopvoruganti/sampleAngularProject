import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  changeText: boolean;

  // constructor(private appComponent: AppComponent){
  //   this.changeText = false;
  //  }


  title = 'my-new-project';
  studentList: any;
  
  constructor(private appService: AppService){ 
    this.getEmployee(5);
  }

  getAllStudents() {
   //we will write a code to call getStudents function in AppService.
   this.appService.getStudents().subscribe(data => {
     this.studentList = data;
   })
  }

  // getAllEmp(){

  // }

   getEmployee(id: number){
    //console.log(id);
   }

  // getEmp(id: number, name: string){

  // }
}