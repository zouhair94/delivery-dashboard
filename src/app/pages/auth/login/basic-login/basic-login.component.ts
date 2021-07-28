import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { 
      
    }

  ngOnInit() {
      document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
    if (this.auth.gettoken()) { 
      this.router.navigate(['/']);
  }
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    //this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    try {
      const { email, password} = this.loginForm.value;
      //this.loading = true;
      this.auth.login(email, password)
    } catch (error) {
      console.log(error)
    }
    
  }  

}
