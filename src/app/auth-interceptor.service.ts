import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.body.operationName === 'login') {
      return next.handle(req)
    }

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem("isUserLoggedIn")
      }
    })
   return next.handle(tokenizedReq)
  }
}
