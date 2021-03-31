import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/access/services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _navCtrl: NavController, public _authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this._authService.loggedIn) {
        const currentUser = this._authService.getLoggedUser();

        // check if route is restricted by role
        if (next.data.roles && next.data.roles.indexOf(currentUser.Role) === -1) {
            // role not authorised so redirect to home page
            // this if exists because was ocorring looping when logged user haven't permission on Dashboard
            if (state.url === '/dashboard') {
              //this._navCtrl.navigateRoot(['signin']);
              this._navCtrl.navigateRoot(['signup']);
            } else {
              this._navCtrl.navigateRoot(['/']);
            }
            return false;
        }
        return true;
    }

    //this._navCtrl.navigateRoot(['signin']);
    this._navCtrl.navigateRoot(['signup']);

    return false;
  }
}