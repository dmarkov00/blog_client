import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe(params => {
        this.getPosts(params.admin);
      });
  }

  getPosts(adminValue: string): void {
    this.postService.getPosts(adminValue).subscribe(posts => {

      this.posts = posts;
    });
  }

}
