import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class Authguard implements CanActivate{
    constructor(private authSer: AuthService , private route: Router){

    }

    canActivate():boolean{
        if (this.authSer.guards) {
            return true;
        }
        else{
            window.alert("Stop You dont have access. Contact Angger");
            this.route.navigate(['/']);
            return false;
        }
    }
}
