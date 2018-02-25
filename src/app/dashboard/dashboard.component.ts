import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../prosesData/fire-auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersEmail: string;
  constructor(public authFireService: FireAuthService , private routers: Router , private fireAuthNew: AngularFireAuth) {}

  ngOnInit() {
    this.fireAuthNew.authState.subscribe(res => {
      if (res) {
        this.usersEmail = res.email; 
      } else {
        this.usersEmail = "Anonimus";
      }
    })
  }

  logoutFormWebsite(){
    let confhere = confirm("Anda yakin ingin Logout");
    if (confhere == true) {
      this.authFireService.logoutThis();
      this.routers.navigate(['/']);
    }else{
      return false;
    }
  }

}
