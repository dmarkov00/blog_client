import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  private baseUrl = 'https://seprapi.prtl.fyi/auth/';

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'register', user, {observe: 'response'})
      .pipe(catchError(err => {
        return of(err);
      }));
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, {
      withCredentials: true,
      observe: 'response'
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

  logout(): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'logout', {}, {withCredentials: true, observe: 'response'}).map(resp => {
      return resp.ok;
    }).pipe(catchError(this.handleError<any>()));
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.http.get <boolean>('https://seprapi.prtl.fyi/auth/access', {withCredentials: true, observe: 'response'})
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

