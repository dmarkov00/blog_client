import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router, private dataService: DataService) {
  }

  @Input() post: Post;

  ngOnInit() {
  }

  deletePost(postId: string) {

    // bootbox.confirm('This is the default confirm!', function (result) {
    //   console.log('This was logged in the callback: ' + result);
    // });
    this.postService.deletePost(postId).subscribe(result => {
      // if(result )

      this.postService.getPersonalPosts().subscribe(updatedPosts => {
        this.dataService.personalPosts = updatedPosts;
      });
      console.log(result);

    });
  }
}
