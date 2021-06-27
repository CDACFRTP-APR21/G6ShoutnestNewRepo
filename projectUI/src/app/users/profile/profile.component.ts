import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private service:SharedService) { }
  id=sessionStorage.getItem('Id');
  user:any;
  UserList:any=[];

  ngOnInit(): void {
    this.refreshUserList();
    this.refreshUser(this.id);
  }

  refreshUserList()
  {
    this.service.getUserList().subscribe(data=>{
      this.UserList=data
    })
  }
  refreshUser(id:any){
    this.service.getUserbyId(id).subscribe(data=>{
      this.user=data
      console.log("from profile cmp ",this.user,this.user[0].userName)
    })
  }

}
