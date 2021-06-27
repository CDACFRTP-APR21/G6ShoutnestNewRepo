import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {

  constructor(private service:SharedService) { }

  shoutList:any=[];

  

  friendlist:any=[];
  uId:any;
  uname:any;
  user:any;

  id=sessionStorage.getItem('Id');
  /* id=1; */
  
  ngOnInit(): void {
    this.refreshshoutList();
  }

  refreshshoutList(){
    this.service.getfriendshout(this.id).subscribe(data=>{
       this.shoutList=data;
       
       console.log("shoutlist",this.shoutList)
      
       this.uId=this.shoutList[0].userId;
       console.log('uid',this.uId);
      /* this.service.getUserbyId(this.uId).subscribe(data=>{
        this.user=data
        console.log("from shout cmp ",this.user,this.user[0].userName) 
      })  */
    });
    /* this.service.getDetailsOfFriend(this.id).subscribe(data=>{
      this.friendlist=data;
      console.log(this.friendlist)
      
      
      
      this.uname=this.friendlist[0][0].userName
      console.log(this.uname)

    
     
   });
     */
   


  }

  


  
  

}
