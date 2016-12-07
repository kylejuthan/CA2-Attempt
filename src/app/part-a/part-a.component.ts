import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent {

  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"]),
        this.router.navigate(["part-b"]);
    }


  kilometers : number = 10;
  miles : number = 15;

  KmToMiles() {
    this.miles = this.kilometers * 0.621371192237;
    //this.miles = this.kilometers * 0.621371192237;
  }

  MilesToKm() {
    this.kilometers = this.miles / 0.621371192237;
    //this.kilometers = this.miles / 0.621371192237; 
  }

  ngOnInit() {
  }
}
