import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
  }

  createPost(title: String, content: String) {
    const post = {'title': title, 'body': content} as Post;
    this.postService.createPost(post).subscribe(result => {
      if (result.ok) {
        alert('Successfully created post. Redirecting to your personal posts');
        this.router.navigate(['/personal-posts/list']);

      } else {
        alert('Some error while making post');
      }
    });
  }
}
