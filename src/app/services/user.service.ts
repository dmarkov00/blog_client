import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  private baseUrl = 'https://seprapi.prtl.fyi/auth/';


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'register', user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'login', user, {withCredentials: true});

  }

  isUserAuthenticated(): Observable<boolean> {
    return this.http.get <boolean>('https://seprapi.prtl.fyi/posts/own', {withCredentials: true, observe: 'response'})
      .map(resp => {
        return resp.ok;
      }).pipe(catchError(this.handleError<any>()));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

