import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';
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
  user:user; 
  user1:any;
  helper=new JwtHelperService();
  loading = false;
  token:any;
  flag:boolean=false;
  submitted = false;
  returnUrl!: string;
  constructor( private formBuilder:FormBuilder
    ,private http:HttpClient,
    private router:Router,private service:SharedService)
  {

  }

  ngOnInit(): void {
    this.user1={
     userName:'',
     password:'',
     userId:'',
     emailId:'',
     firstName:'',
     lastName:''
     
    }
    console.log("in lgin component")
  
  }



  submit() {
    console.log(this.user1.userName+" "+this.user1.password)
    this.submitted = true;
    this.service.login({userName:this.user1.userName,password:this.user1.password})
    .subscribe((data:any)=>{
      
      sessionStorage.setItem('Id',data.userId)
      console.log(data.message)
      if (data.message=="Admin Verfication is pending")
      {
        alert("Admin Verfication is pending")
      }
      else
      {
        this.router.navigate(['/home'])
      }

      console.log("From session"+sessionStorage.getItem('Id'))
    
    })
    
      
  }
  
  forRegister(){
    console.log("in for register")
   this.router.navigate(['/register'])
  }
  

}
