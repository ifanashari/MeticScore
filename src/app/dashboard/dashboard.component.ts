import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersEmail: string;
  dateForToday:any;
  constructor(private routers: Router , private fireAuthNew: AngularFireAuth) {
    this.dateForToday = Date.now();
  }

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
      this.fireAuthNew.auth.signOut();
      this.routers.navigate(['/']);
    }else{
      return false;
    }
  }

}
