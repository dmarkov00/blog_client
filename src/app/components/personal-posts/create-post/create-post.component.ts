import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  createPost(title: String, content: String) {
    const post = {'title': title, 'body': content} as Post;
    this.postService.createPost(post).subscribe(result => {
    });
  }
}
