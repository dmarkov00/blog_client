import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login(username: String, password: String): void {

    const user = {'username': username, 'password': password} as User;
    // const asd: User = {
    //   'username': 'john'
    // };


    this.userService.login(user)
      .subscribe(result => {
        console.log(result);
      });
  }
}
