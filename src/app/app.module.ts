import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
import { ViewScoreComponent } from './view-score/view-score.component';
import { SolveComponent } from './solve/solve.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePuzzleComponent,
    ViewScoreComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
