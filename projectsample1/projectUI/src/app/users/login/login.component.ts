import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { user } from 'src/app/User';
import { JwtHelperService } from '@auth0/angular-jwt';

/* import  jwt_decode from 'jwt-decode' */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* form:FormGroup; */
  user: user;
  user1: any;
  helper = new JwtHelperService();
  loading = false;
  err: any
  token: any;
  flag: boolean = false;
  submitted = false;
  returnUrl!: string;
  errmsg:any
  public errors: any = [];
  constructor(private formBuilder: FormBuilder
    , private http: HttpClient,
    private router: Router, private service: SharedService) {

  }

  ngOnInit(): void {
    this.user1 = {
      userName: '',
      password: '',
      userId: '',
      emailId: '',
      firstName: '',
      lastName: ''

    }

    
   
  }



  submit() {

    console.log(this.user1.userName + " " + this.user1.password)
    this.submitted = true;


    this.service.login({ userName: this.user1.userName, password: this.user1.password })
      .subscribe((data: any) => {
        this.flag=false

        sessionStorage.setItem('Id', data.userId)
        sessionStorage.setItem('userName', data.userName)
        sessionStorage.setItem('password', data.password)
        sessionStorage.setItem('emailId', data.emailId)
        console.log("From session" + sessionStorage.getItem('Id'))

         
        this.errmsg=data.errmsg
        
       if(this.errmsg=="Invalid Credentials")
       {
        this.flag=true
       }
       else
       this.router.navigate(['/home'])
      
        



      },
        (err) => {
          
          this.errors = err['error'];
        }
      )



  }

  forRegister() {
    console.log("in for register")
    this.router.navigate(['/register'])
  }


}
