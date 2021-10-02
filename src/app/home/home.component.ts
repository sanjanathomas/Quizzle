import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


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

  accordionIndex : number = 0
  constructor() { }

  selectedData = [{ id: 1}, { id: 2}];

  ngOnInit(): void {
  }

  setAccordionIndex(index: number) : void {
    this.accordionIndex = index
  }
}
