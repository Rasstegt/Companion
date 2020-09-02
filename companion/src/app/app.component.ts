import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Companion';

  holidays;
  holidaysOrig;
  selectedHoliday;

  constructor(http: HttpClient) {

    const URL = "assets/pulledData.json";
    http.get(URL).subscribe(data=> {
      this.holidays = data;
      this.holidaysOrig = data;
      console.log(data);
    }, error=> {
      console.log(error);
      this.holidays = {};
    });
    
  }

  // toQuery(){
  //   this.holidays = this.holidaysOrig.filter(emp => emp.department == this.holidaysOrig);
  // }

  watchVideo(link){
    window.open(link, "_blank");
  }

  getAvatar(link){
      return link;
  }

}
