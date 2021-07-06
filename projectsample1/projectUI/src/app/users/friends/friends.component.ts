import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private service: SharedService) { }

  
  friendList: any = [];
  pendingRequests:any=[];
  id=sessionStorage.getItem('Id');
 

  ngOnInit(): void {
    this.refreshFriendList();
    this.getPendingRequests();

  }

  refreshFriendList() {
    this.service.getFriendList(this.id).subscribe(data=>{
      this.friendList = data;
    });
  }
  getPendingRequests() {
    this.service.getPendingRequests(this.id).subscribe(data=>{
      this.pendingRequests = data;
      console.log("pending req",this.pendingRequests)
    });
  }

  unFriend(data:any){
    var val={
      userId:data,
      friendId:this.id,
      status:4,

    }
    this.service.changeFriendStatus(val).subscribe(res=>{
      
    });
    this.refreshFriendList();
    window.location.reload();
  }
  acceptRequest(data:any){
    var val={
      userId:data,
      friendId:this.id,
      status:3,

    }
    this.service.changeFriendStatus(val).subscribe(res=>{
      
    });
    this.getPendingRequests();
    window.location.reload();
  }
  rejectRequest(data:any){
    var val={
      userId:this.id,
      friendId:data,
      status:2,

    }
    this.service.changeFriendStatus(val).subscribe(res=>{
     
    });
    this.getPendingRequests();
    window.location.reload();
  }
  
}
