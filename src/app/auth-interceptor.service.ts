import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private loginServ: AuthService){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    if(req.body.operationName === 'login') {
      return next.handle(req)
    }

    console.dir(req)

    

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem("isUserLoggedIn")
      }
    })
   return next.handle(tokenizedReq).pipe(
    catchError(
      (err, caught) => {
        if (err.status === 401){
          this.handleAuthError();
          return of(err);
        }
        throw err;
      }
    )
  );
  }
  private handleAuthError() {
    localStorage.removeItem('isUserLoggedIn');
            this.router.navigateByUrl("/authentication/login");
  }
}
