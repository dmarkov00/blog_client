import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Injectable()
export class AnonymousUserGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(): boolean {
    if (this.userService.isUserAuthenticated()) {
      return true;
    }
    console.log('not allowed to open this');
    return false;
  }
}
