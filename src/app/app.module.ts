import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatePuzzleComponent } from './create-puzzle/create-puzzle.component';
import { ViewScoreComponent } from './view-score/view-score.component';
import { SolveComponent } from './solve/solve.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginPageGuard } from './login/login.route-guard';
import { HomePageGuard } from './home/home.route-guard';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './toast/toast-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePuzzleComponent,
    ViewScoreComponent,
    SolveComponent,
    LoginComponent,
    VerifyComponent,
    PopUpComponent,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    NgxSpinnerModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [LoginPageGuard, HomePageGuard, PopUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
