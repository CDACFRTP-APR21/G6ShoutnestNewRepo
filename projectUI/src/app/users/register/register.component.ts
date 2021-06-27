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
      
     
     this.router.navigate([""])
      
      
    })

    }
   
    forLogin()
    {

    }
  
  
}
