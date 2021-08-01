import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {
  constructor(private router: Router, private loginServ: AuthService){}
   isLogged = false;
   canActivate(){
    
    this.loginServ.verifyToken();

     if (!this.loginServ.gettoken()) {  
      this.router.navigateByUrl("/authentication/login");  
    }
      
    return this.loginServ.gettoken();
      

    
  }
  
}
