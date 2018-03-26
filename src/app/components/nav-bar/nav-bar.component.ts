import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService, public dataService: DataService) {
  }

  ngOnInit() {
    this.userService.isUserAuthenticated().subscribe(isAuth => {
      this.dataService.isAuth = isAuth;
    });
  }

  logout() {
    this.userService.logout();
  }

}
