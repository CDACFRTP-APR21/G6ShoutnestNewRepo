import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service: SharedService,private router:Router) { }

  username:any
  email:any
  password:any
  firstname:any
  lastname:any
  dob:any
  mobileno:any
  id=sessionStorage.getItem('Id');



  ngOnInit(): void {
  }
  editProfileDetails()
  {
    var val={
      userId:this.id,
      userName:this.username,
      emailId:this.email,
      password:this.password,
      firstName:this.firstname,
      lastName:this.lastname,
      DateOfBirth:this.dob,
      MobileNo:this.mobileno,
      admin_verify:true
    
    }
    this.service.editProfile(val).subscribe(res=>{
      
    });
    
    
    this.router.navigate(['/home'])


  }




}
