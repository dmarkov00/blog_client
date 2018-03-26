import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/Post';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders()
};


@Injectable()
export class PostService {
  private baseUrl = 'https://seprapi.prtl.fyi/posts/';

  constructor(private http: HttpClient) {
  }

  getPosts(adminValue: string): Observable<Post[]> {

    const options = adminValue ?
      {params: new HttpParams().set('admin', adminValue)} : {};

    return this.http.get<Post[]>(this.baseUrl, options);
  }

  getPersonalPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'own', {withCredentials: true});
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(this.baseUrl, post, {
      withCredentials: true,
      observe: 'response'
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(this.baseUrl + postId, {
      withCredentials: true
    }).pipe(catchError(err => {
      return of(err);
    }));
  }

}
