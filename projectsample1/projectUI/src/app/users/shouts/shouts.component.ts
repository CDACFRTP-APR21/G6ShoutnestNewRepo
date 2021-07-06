import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {

  constructor(private service:SharedService) { }

  friend:any=''
  shoutList:any=[];
friendnamelist:any=[]
  shout:any
  imgflag:boolean=false
  videoflag=false
  friendlist:any=[];
  uId:any;
  uname:any;

  
  id:any;
  reason:any;
    hidebutton:any;

  
  ngOnInit(): void {
    this.id=sessionStorage.getItem("Id")
    this.shout={
      friend:'',
      caption:'',
      photoFileName:'',
      path:'',
      type:''
     
    }
    
    this.refreshshoutList();
    console.log(this.shoutList)
    if(this.shoutList.type=="img")
       {
        this.imgflag=true
        console.log(this.shoutList.type)
       }
  }

  refreshshoutList(){
    this.service.getfriendshout(this.id).subscribe(data=>{

       this.shoutList=data
       console.log(this.shoutList)
     
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
    
    console.log("from data",data)
    console.log("from hidden",this.hidebutton)

    console.log("fron reason",this.reason);
    this.service.reports(val).subscribe(res=>{
     
    });
  }

  


}
