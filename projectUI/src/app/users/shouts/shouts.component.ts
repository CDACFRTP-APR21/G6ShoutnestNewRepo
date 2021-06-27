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

  /*id=sessionStorage.getItem('userId');*/
  id:any;
  
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

  onModalClick(val:any)
  {
    console.log("From modal",val)
  }


  


}
