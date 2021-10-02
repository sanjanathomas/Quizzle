import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private zone: NgZone    ) {

    // Used for listening to login events
    Hub.listen('auth', ({ payload: { event, data } }) => {
      if (event === 'cognitoHostedUI' || event === 'signedIn') {
        console.log(event);
        this.zone.run(() => this.router.navigate(['/home']));
      } else {
        this.spinner.hide();
      }
    });

   }

  ngOnInit() {
    this.spinner.show();

    Auth.currentAuthenticatedUser();
  }

}
