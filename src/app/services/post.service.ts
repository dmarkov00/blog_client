import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders()
};


@Injectable()
export class PostService {
  private baseUrl = 'https://seprapi.prtl.fyi/posts/';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.baseUrl);
  }

  getPersonalPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'own', {withCredentials: true});
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(this.baseUrl, post, {withCredentials: true});
  }

}
