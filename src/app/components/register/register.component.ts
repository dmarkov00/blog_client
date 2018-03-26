import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private dataService: DataService) {
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

              this.router.navigate(['home']);
            } else {
              alert(loginResult.error.message);
            }
          });

        } else {
          alert(result.error.message);
        }
      });

  }
}
