import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private dataService: DataService,
              private snotifyService: SnotifyService) {
  }

  ngOnInit() {
  }

  login(username: String, password: String): void {

    const user = {'username': username, 'password': password} as User;

    this.userService.login(user)
      .subscribe(result => {
        if (result.ok) {

          this.displaySuccessNotification('You were logged in');
          this.dataService.isAuth = true;

          this.router.navigate(['home']);
          this.displaySuccessNotification('You were redirected to the home page');

        } else {
          this.displayErrorNotification(result.error.message);
        }
      });
  }

  displayErrorNotification(error: string): void {
    this.snotifyService.error(error, {
      timeout: 7000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    });
  }

  displaySuccessNotification(message: string): void {
    this.snotifyService.success(message, {
      timeout: 4000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    });
  }
}
