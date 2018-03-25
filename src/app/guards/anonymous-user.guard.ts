import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AnonymousUserGuard implements CanActivate {
  canActivate(): boolean {
    console.log('guar called');
    return true;
  }
}
