import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  // Alert's
  async showAlert(titulo: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Toast's
  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      buttons: [{
        side: 'end',
        icon: 'close',
        role: 'cancel'
      }]
    });
    toast.present();
  }

}
