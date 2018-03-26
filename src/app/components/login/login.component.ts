import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login(username: String, password: String): void {

    const user = {'username': username, 'password': password} as User;

    this.userService.login(user)
      .subscribe(result => {
        if (result.ok) {
          alert('You are going to be logged in and redirected to the home page');

          this.router.navigate(['home']);
        } else {
          alert(result.error.message);
        }
      });
  }
}
