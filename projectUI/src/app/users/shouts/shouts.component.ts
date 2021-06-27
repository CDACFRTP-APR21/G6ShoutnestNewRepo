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
   reason:any;

  id=sessionStorage.getItem('Id');
  // id=1;
  
  ngOnInit(): void {
    this.refreshshoutList();
    this.reason='';
  }

  refreshshoutList(){
    this.service.getfriendshout(this.id).subscribe(data=>{
       this.shoutList=data;
       console.log(this.shoutList)
       
       this.uId=this.shoutList[0].userId;
       console.log('uid',this.uId);
    });
  }

 
   reports(data:any){
     var val={
      
      
        shoutId: [
            data
        ],
        userId: [
            this.id
        ],
        reason: this.reason
    
       
     }
     console.log("fron reason",this.reason);
     this.service.reports(val).subscribe(res=>{
      // alert(res.toString());
     });

  

   }

  
    
    /* this.service.getDetailsOfFriend(this.id).subscribe(data=>{
      this.friendlist=data;
      console.log(this.friendlist)
      
      
      
      this.uname=this.friendlist[0][0].userName
      console.log(this.uname)

    
     
   });
     */
   


  

  


  


}
