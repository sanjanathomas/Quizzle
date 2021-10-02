import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
import { ViewScoreComponent } from './view-score/view-score.component';
import { SolveComponent } from './solve/solve.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginPageGuard } from './login/login.route-guard';
import { HomePageGuard } from './home/home.route-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePuzzleComponent,
    ViewScoreComponent,
    SolveComponent,
    LoginComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    NgxSpinnerModule
  ],
  providers: [LoginPageGuard, HomePageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
