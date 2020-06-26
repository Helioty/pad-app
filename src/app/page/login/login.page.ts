import { Component, OnInit } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth/auth-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username = '';
  public password = '';

  constructor(private authFireS: AuthFireService) { }

  ngOnInit() {
  }

  async login() {
    await this.authFireS.login(this.username, this.password).then((result) => {
      console.log('User:');
      console.log(result);
    });
  }

}
