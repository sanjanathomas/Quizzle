import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  score: number;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', score: 1.0079, grade: 'H'},
  {id: 2, name: 'Helium', score: 4.0026, grade: 'He'},
  {id: 3, name: 'Lithium', score: 6.941, grade: 'Li'},
  {id: 4, name: 'Beryllium', score: 9.0122, grade: 'Be'},
  {id: 5, name: 'Boron', score: 10.811, grade: 'B'},
  {id: 6, name: 'Carbon', score: 12.0107, grade: 'C'},
  {id: 7, name: 'Nitrogen', score: 14.0067, grade: 'N'},
  {id: 8, name: 'Oxygen', score: 15.9994, grade: 'O'},
  {id: 9, name: 'Fluorine', score: 18.9984, grade: 'F'},
  {id: 10, name: 'Neon', score: 20.1797, grade: 'Ne'},
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
