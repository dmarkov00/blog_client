import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private dataService: DataService,
              private snotifyService: SnotifyService) {
  }

  ngOnInit() {
  }


  register(username: String, password: String): void {

    const user = {'username': username, 'password': password} as User;

    this.userService.register(user)
      .subscribe(result => {
        if (result.ok) {

          alert('Successful registration. You\'ll be logged in and redirected to home.');
          this.userService.login(user).subscribe(loginResult => {
            if (loginResult.ok) {
              this.dataService.isAuth = true;

              this.displaySuccessNotification();

              this.router.navigate(['home']);
            } else {
              this.displayErrorNotification(loginResult.error.message);
            }
          });

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

  displaySuccessNotification(): void {
    this.snotifyService.success('Successful registration.', {
      timeout: 4000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    });
    this.snotifyService.success('You were redirected to the home page.', {
      timeout: 4000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    });
  }
}
