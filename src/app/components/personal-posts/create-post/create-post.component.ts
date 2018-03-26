import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router, private snotifyService: SnotifyService) {
  }

  ngOnInit() {
  }

  createPost(title: String, content: String) {
    const post = {'title': title, 'body': content} as Post;
    this.postService.createPost(post).subscribe(result => {
      if (result.ok) {
        this.snotifyService.success('Created new post.', {
          timeout: 4000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true
        });
        this.snotifyService.success('You were redirected to your personal list.', {
          timeout: 4000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true
        });
        this.router.navigate(['/personal-posts/list']);

      } else {
        alert('Some error while making post');
      }
    });
  }
}
