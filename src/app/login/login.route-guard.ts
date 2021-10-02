import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable()
export class LoginPageGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
       return  Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/home'], { replaceUrl: true });
        return false;
      }).catch((err) => {
        return true;
      });
    }
}
