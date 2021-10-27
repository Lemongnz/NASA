import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface dataNasa {
  title?: string;
  copyright?: string;
  explanation?: string;
  url?: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  data: dataNasa = {};

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

