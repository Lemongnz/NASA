import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataNasaI } from './page1.interface';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})



export class Page1Component implements OnInit {
  data: dataNasaI = {};
  fecha: Date = new Date();
  safeURL: any;
  

  constructor (
    private http: HttpClient, 
    protected sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getNasaInfo();

  }
  
  

  getNasaInfo() {
    this.http.get(`https://api.nasa.gov/planetary/apod?api_key=ivG8qDX0kgEev4MSSikGgQz07UpnhqpLi64aOAes&date=${this.fecha.toISOString().split('T')[0]}`).subscribe(
        (data: any) => {
          this.data = data;
          this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
        }
    )
  }

  

  updateDate(date: Date) {
    this.fecha = date;
    this.getNasaInfo();
  }


}

