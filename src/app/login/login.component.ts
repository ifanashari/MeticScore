import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from '@firebase/util';
import { UserAuthEmail } from '../prosesData/data.model';
import * as firebase from 'firebase/app';



declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail: Observable<firebase.User>;
  selectedUserEmail: UserAuthEmail = new UserAuthEmail();
  loading:boolean;

  constructor(private firebaseAuth: AngularFireAuth , private toast: ToastrService , private routers: Router) { 
    this.loading = false;  
  }

  ngOnInit() {
    $(document).ready(function() {
      setInterval(function(){
        fade();
      },2000);
      function fade(){
        $("span").fadeToggle(300);
      }
  
    });
  }

  loginNowWithEmail(loginUser: NgForm){
    this.showLoadingProgress();
    this.firebaseAuth
    .auth.signInWithEmailAndPassword(loginUser.value.email , loginUser.value.password)
    .then(value => {
      this.hideLoadingProgress();
      this.routers.navigate(['/dashboard']);
    })
    .catch(err => {
      this.errForLogin();
    })
  }

  showLoadingProgress(){
    this.loading = true;
  }
  hideLoadingProgress(){
    this.loading = false;
  }
  errForLogin(){
    this.hideLoadingProgress();
    this.resetFormLogin();
    this.toast.error('Your email and password missmatch' , 'Oopps!!');
  }
  resetFormLogin(loginUser?: NgForm){
    if (loginUser != null) {
      loginUser.reset();
      this.selectedUserEmail = {
        email: '',
        password: ''
      }
    }
  }

}
