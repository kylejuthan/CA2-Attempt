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
}
