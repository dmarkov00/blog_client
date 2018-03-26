import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personalPosts: Post[] = [];

  constructor(private postService: PostService, public dataService: DataService) {
  }

  ngOnInit() {
    this.getPersonalPosts();

  }

  getPersonalPosts() {
    this.postService.getPersonalPosts().subscribe(posts => {
      this.dataService.personalPosts = posts;
    });
  }

}
