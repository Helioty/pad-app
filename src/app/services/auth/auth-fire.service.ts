import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonService } from '../common/common.service';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

  constructor(private afAuth: AngularFireAuth, private common: CommonService) { }

  login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(username + '@paddapp.com', password).then((result) => {
        console.log(result);
        resolve(result);
      }, (error) => {
        console.dir(error);
        if (error.code === 'auth/user-not-found') {
          console.log('User not found!');
          this.common.showToast('User not found!');
        }
        reject(error);
      });
    });
  }

  register(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(username + '@paddapp.com', password).then((result) => {
        console.log(result);
        resolve(result);
      }, (error) => {
        console.dir(error);
        reject(error);
      });
    });
  }

}
