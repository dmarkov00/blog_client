import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  private baseUrl = 'https://seprapi.prtl.fyi/auth/';


  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'register', user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'login', user, {withCredentials: true});

  }

  isUserAuthenticated(): boolean {
    return false;
  }

}

