import { Component, OnInit } from '@angular/core';



declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
