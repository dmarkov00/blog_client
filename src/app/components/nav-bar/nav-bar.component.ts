import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  isLoggedIn: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn = this.userService.isUserAuthenticated();

  }

}
