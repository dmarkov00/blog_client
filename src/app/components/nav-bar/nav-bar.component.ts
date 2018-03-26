import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserService, public dataService: DataService, private router: Router,
              private snotifyService: SnotifyService) {
  }

  ngOnInit() {
    this.userService.isUserAuthenticated().subscribe(isAuth => {
      this.dataService.isAuth = isAuth;
    });
  }

  logout() {
    this.userService.logout().subscribe(res => {
      this.dataService.isAuth = false;
      this.displaySuccessNotification();

      this.router.navigate(['home']);
    });
  }

  displaySuccessNotification(): void {

    this.snotifyService.success('You were logged out.', {
      timeout: 4000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    });
  }

}
