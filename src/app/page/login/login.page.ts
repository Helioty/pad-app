import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth/auth-fire.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('input0', { static: true }) input0: IonInput;
  @ViewChild('input1', { static: true }) input1: IonInput;

  public username = '';
  public password = '';

  constructor(private authFireS: AuthFireService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
  }

  ionViewWillLeave() {
  }

  ionViewDidLeave() {
  }

  inputFoco(id: number) {
    switch (id) {
      case 0:
        this.input0.setFocus();
        break;

      case 1:
        this.input1.setFocus();
        break;

      default:
        break;
    }
  }

  async login() {
    await this.authFireS.login(this.username, this.password).then((result) => {
      console.log('User:');
      console.log(result);
    });
  }

}
