import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  login(email: string, password: string) {

    this.apollo.mutate({
      mutation: gql`
        mutation 
          login($email:String!,$password:String!){
            login(email:$email, password: $password)
          }
        
      `,
      variables: {
        email,
        password
      }
    }).subscribe((result: any)=>{
      localStorage.setItem('isUserLoggedIn',`Bearer ${result.data.login}`);
      
      this.router.navigate(['/']);
     
    });

  }

  gettoken(){  
    return !!localStorage.getItem("isUserLoggedIn");  
    }  

  getUserId() {
    const token = localStorage.getItem("isUserLoggedIn");
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }

  logout(){
    localStorage.removeItem('isUserLoggedIn');
  }
}
