import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'quizzle';

  constructor(public url:LocationStrategy) { }

  ngOnInit() {

}
}
