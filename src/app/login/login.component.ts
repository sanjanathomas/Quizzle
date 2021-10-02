import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    // this.router.navigate(['dashboard']);
    this.spinner.show();
    Auth.federatedSignIn();
  }

}
