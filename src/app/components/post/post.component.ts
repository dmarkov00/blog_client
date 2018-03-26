import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router, private dataService: DataService,
              private snotifyService: SnotifyService) {
  }

  @Input() post: Post;

  ngOnInit() {
  }

  deletePost(postId: string) {

    this.snotifyService.confirm('Are you sure you want to delete this post?', 'Confirm deletion!', {
      closeOnClick: true,
      pauseOnHover: true,
      buttons: [
        {
          text: 'Yes', action: () => {
            this.postService.deletePost(postId).subscribe(result => {

              this.postService.getPersonalPosts().subscribe(updatedPosts => {
                this.dataService.personalPosts = updatedPosts;
              });

            });
          }, bold: false
        },
        {
          text: 'No', action: () => {
          }
        },
      ]
    });


  }
}
