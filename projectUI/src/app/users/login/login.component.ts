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
 err:any
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
  /*  this.form=this.formBuilder.group({
     userName:'',
     password:''
   }); */
  }



  submit() {
    
    console.log(this.user1.userName+" "+this.user1.password)
    this.submitted = true;
    
    
      this.service.login({userName:this.user1.userName,password:this.user1.password})
      .subscribe((data:any)=>{
        
        try{
          sessionStorage.setItem('Id',data.userId)
          sessionStorage.setItem('userName',data.userName)
          sessionStorage.setItem('password',data.password)
          sessionStorage.setItem('emailId',data.emailId)
          console.log("From session"+sessionStorage.getItem('Id'))
          
         this.router.navigate(['/home'])
        }
        catch(Exception)
        {
          this.flag=true
          console.log(Exception)
          this.err="USername does not exist"
        }
        
     
        
      })
     
    
      
  }
  
  forRegister(){
    console.log("in for register")
   this.router.navigate(['/register'])
  }
  

}
