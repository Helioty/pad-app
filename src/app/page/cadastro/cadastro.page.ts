import { Component, OnInit } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth/auth-fire.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public username0 = '';
  public password1 = '';
  public password2 = '';

  constructor(private authFireS: AuthFireService) { }

  ngOnInit() {
  }

  async register() {
    if (this.password1 !== this.password2) {
      return console.log('Passwords dont match');
    } else {
      await this.authFireS.register(this.username0, this.password1).then((result) => { 
        console.log(result);
      });
    }
  }

}
