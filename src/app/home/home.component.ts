import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  public subjects = [
    {id:1, name: "AWS Architecture"},
    {id:2, name: "Physics"},
    {id:3, name: "Electronics"},
  ]

  public icons = [
    {id:1, imageSrc: "../../assets/images/aws.jpeg"},
    {id:2, imageSrc: "../../assets/images/physics.svg"},
    {id:3, imageSrc: "../../assets/images/electronics.png"},
  ]  

  accordionIndexOne : boolean = true;
  accordionIndexTwo : boolean = false;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  toggleAccordionIndex(index: number) : void {
    if(index == 1) {
      this.accordionIndexOne = !this.accordionIndexOne;
      this.accordionIndexTwo = false;
    } else if(index ==2) {
      this.accordionIndexTwo = !this.accordionIndexTwo;
      this.accordionIndexOne = false;
    }
  }

  goToSolve() {
    this.router.navigate(["/solve"])
  }
}
