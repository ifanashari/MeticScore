import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { UserAuthEmail } from './data.model';

@Injectable()
export class FireAuthService {
  userEmail: Observable<firebase.User>;
  selectedUserEmail: UserAuthEmail = new UserAuthEmail();

  constructor(private firebaseAuth: AngularFireAuth , private routers: Router) { 
    this.userEmail = firebaseAuth.authState;  
  }

  signInWithGoogleEmail(email: string , password: string){
    this.firebaseAuth
        .auth.signInWithEmailAndPassword(email , password)
        .then(value => {
          this.routers.navigate(['/dashboard']);
        })
        .catch(err => {
          console.log('Error cant holder it' , err.message);
        })
  }

  logoutThis(){
    this.firebaseAuth.auth.signOut();
  }

}
