import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'final-exam';

  employeesOriginal;
  employees;
  selectedDepartment = "IT";

  constructor(http: HttpClient) {

    const URL = "http://ejd.songho.ca/employees.json";
    http.get(URL).subscribe(data=> {
      this.employees = data;
      this.employeesOriginal = data;
      console.log(data);
    }, error=> {
      console.log(error);
      this.employees = {};
    });
    
  }

  selectDepartment(){
    this.employees = this.employeesOriginal.filter(emp => emp.department == this.selectedDepartment);
  }

}
