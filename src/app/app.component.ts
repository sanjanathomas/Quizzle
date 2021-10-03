import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'quizzle';
  email: string = '';

  constructor(public url: LocationStrategy) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.email = user.attributes.email;
      })
      .catch(() => console.log('Not signed in'));
  }

  async logout() {
    this.email = '';
    await Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
