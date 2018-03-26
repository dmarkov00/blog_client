import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Injectable()
export class AnonymousGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {


    return this.userService.isUserAuthenticated().take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;
      });
  }
}
