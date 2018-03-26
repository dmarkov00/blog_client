import {Injectable} from '@angular/core';
import {Post} from '../models/Post';

@Injectable()
export class DataService {

  personalPosts: Post[];

  isAuth: boolean;

  loggedInUser: string;

  constructor() {
  }

}
