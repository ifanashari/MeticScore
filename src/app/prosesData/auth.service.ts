import { Injectable } from '@angular/core';
import { Router , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Authguard } from './authguard';

@Injectable()
export class AuthService {
  public guards:boolean;
  constructor() { 
    if (sessionStorage.getItem('status')) {
      this.guards = true;
    } else {
      this.guards = false;
    }
  }

  openGuards(){
    this.guards = true;
  }
  closeGuards(){
    this.guards = false;
  }

}
