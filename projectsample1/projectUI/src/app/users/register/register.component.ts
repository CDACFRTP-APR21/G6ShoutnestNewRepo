import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { user } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user1:any
  flag:boolean=false
  errmsg:any
  err:any
  constructor(private service:SharedService,private router:Router) { }

  ngOnInit(): void {
    
    this.user1={
      userName:'',
     password:'',
     
     emailId:'',
     firstName:'',
     lastName:''
     
    }
  }


  register()
  {
    console.log(this.user1)
    this.service.addUser(this.user1).subscribe((data:any)=>{
      this.flag=false
      this.err=data.errmsg
      if(this.err=="Username exists")
      {
        this.flag=true
        
      }
      else
      {
        
        this.router.navigate([""])
      }
     
     
      
      
    })

    }
   
    forLogin()
    {

    }
  
  
}
