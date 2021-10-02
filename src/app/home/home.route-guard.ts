import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable()
export class HomePageGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        return Auth.currentAuthenticatedUser().then(() => true)
      .catch(() => {
        this.router.navigate(['/login'], { replaceUrl: true });
        return false;
      });
    }
}
