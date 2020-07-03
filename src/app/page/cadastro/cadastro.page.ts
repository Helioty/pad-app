import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth/auth-fire.service';
import { CommonService } from 'src/app/services/common/common.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  @ViewChild('input0', { static: true }) input0: IonInput;
  @ViewChild('input1', { static: true }) input1: IonInput;
  @ViewChild('input2', { static: true }) input2: IonInput;

  public username0 = '';
  public password1 = '';
  public password2 = '';

  constructor(private authFireS: AuthFireService, private common: CommonService) { }

  ngOnInit() {
  }

  inputFoco(id: number) {
    switch (id) {
      case 0:
        this.input0.setFocus();
        break;

      case 1:
        this.input1.setFocus();
        break;

      case 2:
        this.input2.setFocus();
        break;

      default:
        break;
    }
  }

  async register() {
    if (this.username0.length < 4) {
      return this.common.showToast('Informe um usuário valido');
    }
    if (this.password1 !== this.password2) {
      return this.common.showAlert('Atenção!', 'As senhas diferem.');
    } else {
      await this.authFireS.register(this.username0, this.password1).then((result) => {
        console.log(result);
      });
    }
  }

}
