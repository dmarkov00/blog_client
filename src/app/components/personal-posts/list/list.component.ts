import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personalPosts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPersonalPosts();

  }

  getPersonalPosts() {
    this.postService.getPersonalPosts().subscribe(posts => {
      this.personalPosts = posts;
      console.log(posts);
    });
  }

}
