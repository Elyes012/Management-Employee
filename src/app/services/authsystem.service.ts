import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthsystemService {

  constructor(public fauth: AngularFireAuth, private router: Router) { }

  newSignup(value) {
    console.log('register service', value);
    return new Promise<any>((resolve, reject) => {
      this.fauth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }
  userLogin(data) {
    this.fauth.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
      console.log('ok', res);
      
      })
      .catch(err => {
        console.log('not ok:', err.message);
      });
  }

  getAuth() {
    return this.fauth.authState.pipe(map(myAuth => myAuth));
    }

    userDisconnect() {
      this.fauth.auth.signOut();
      console.log('loggout');
      this.router.navigateByUrl('/login');
      }
    
}
