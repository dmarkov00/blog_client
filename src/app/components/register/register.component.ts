import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }


  register(username: String, password: String): void {

    const user = {'username': username, 'password': password} as User;

    // const asd: User = {
    //   'username': 'john'
    // };


    this.userService.register(user)
      .subscribe(result => {
        console.log(result);
      });

  }
}
