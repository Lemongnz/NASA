import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NASA';
  data: any[] = [];


  constructor (
    private http: HttpClient
  ) {}

  ngOnInit() {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=ivG8qDX0kgEev4MSSikGgQz07UpnhqpLi64aOAes').subscribe(
        (data: any) => {
          this.data = data;
        }
      )

    }
    
}







