import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private postService: PostService) {
  }

  ngOnInit() {

  }

}
