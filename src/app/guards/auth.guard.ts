import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    return this.userService.isUserAuthenticated().take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      });
  }
}
