import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {}
  // signup(email: string, password: string) {
  //   this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Success!', value);
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:', err.message);
  //     // tslint:disable-next-line: no-trailing-whitespace
  //     });
  // }
  loginEmailUser(email: string, password: string) {
   return new Promise((resolve, reject) => {
     this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then
     ( userData => resolve(userData),
     err => reject(err));
   });
  }
  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signOut().then(
        () => {
          resolve(true);
        }
      ).catch(
        () => resolve(false)
      );
    });
  }
}
