import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders()
};


@Injectable()
export class PostService {
  private baseUrl = 'https://seprapi.prtl.fyi/';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.baseUrl + 'posts');
  }

  getPersonalPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'posts/own', {withCredentials: true});
  }

}
