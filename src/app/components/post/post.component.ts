import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  @Input() post: Post;

  ngOnInit() {
  }

  deletePost(postId: string) {
    this.postService.deletePost(postId).subscribe(result => {
      console.log(result);

    });
  }
}
