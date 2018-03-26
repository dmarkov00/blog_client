import {Injectable} from '@angular/core';
import {Post} from '../models/Post';

@Injectable()
export class DataService {

  personalPosts: Post[];

  constructor() {
  }

}
