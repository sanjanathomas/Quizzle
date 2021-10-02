import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomePageGuard } from './home/home.route-guard';
import { LoginComponent } from './login/login.component';
import { LoginPageGuard } from './login/login.route-guard';
import { SolveComponent } from './solve/solve.component';
import { VerifyComponent } from './verify/verify.component';
import { ViewScoreComponent } from './view-score/view-score.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginPageGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomePageGuard]
  },
  {
    path: 'puzzle',
    component: CreatePuzzleComponent
  },
  {
    path: 'scores',
    component: ViewScoreComponent
  },
  {
    path: 'solve',
    component: SolveComponent
  },
  {
    path: 'verify',
    component: VerifyComponent,
    canActivate: [LoginPageGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
