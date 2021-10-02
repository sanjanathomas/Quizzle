import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewScoreComponent } from './view-score/view-score.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'puzzle', component: CreatePuzzleComponent},
  {path: 'scores', component: ViewScoreComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
