import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  score: number;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Ann', score: 94, grade: 'A'},
  {id: 2, name: 'Aparna', score: 90, grade: 'A-'},
  {id: 3, name: 'Derek', score: 97, grade: 'A'},
  {id: 4, name: 'Fluorine', score: 97, grade: 'A'},
  {id: 5, name: 'Hari', score: 80, grade: 'B'},
  {id: 6, name: 'Helen', score: 68, grade: 'C'},
  {id: 7, name: 'Hima', score: 93, grade: 'A-'},
  {id: 8, name: 'Neon', score: 84, grade: 'B-'},
  {id: 9, name: 'Sonal', score: 79, grade: 'B'},
  {id: 10, name: 'Willy', score: 97, grade: 'A'},
];

@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.css']
})
export class ViewScoreComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = ['id', 'name', 'score', 'grade'];
  dataSource = ELEMENT_DATA;
  subject: String = "";

  ngOnInit(): void {
  }

}
