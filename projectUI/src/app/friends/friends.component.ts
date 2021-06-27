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
  // id=sessionStorage.getItem('userId');
  id = 1;

  ngOnInit(): void {
    this.refreshFriendList();
  }

  refreshFriendList() {
    this.service.getFriendList(this.id).subscribe(data => {
      this.friendList = data;
    });
  }

  unFriend(data:any){
    var val={
      userId:this.id,
      friendId:data,
      status:4,

    }
    this.service.unFriend(val).subscribe(res=>{
      alert(res.toString());
    });
    this.refreshFriendList();
  }
  

}

