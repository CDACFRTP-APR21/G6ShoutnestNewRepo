import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private service:SharedService) { }

  UserList:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList()
  {
    this.service.getUserList().subscribe(data=>{
      this.UserList=data
    })
  }

}
