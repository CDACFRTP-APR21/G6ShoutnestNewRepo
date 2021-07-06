import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { SharedService } from '../shared.service';
import { shouts } from '../Shouts';

@Component({
  selector: 'app-uploadpost',
  templateUrl: './uploadpost.component.html',
  styleUrls: ['./uploadpost.component.css']
})
export class UploadpostComponent implements OnInit {
  shouts:shouts
  flag:boolean=false
  constructor(private service:SharedService,private router:Router) { }
 

  ngOnInit(): void {
    this.shouts={
      userId:sessionStorage.getItem("Id"),
      caption:'',
      path:'',
      uploadDate:new Date(Date.now()),
      type:'',
      photoFileName:''
    }
  }

  
  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.shouts.photoFileName=data.toString();
      this.shouts.path=this.service.PhotoUrl+this.shouts.photoFileName;
      this.flag=true
    })
  }
  onPost()
  {
 
  let rev1
 
  
  let temp
  rev1=this.shouts.path.split('.')
  for(let i=0;i<rev1.length;i++)
  {
    
  
temp=rev1[i]
  }
// type=1 for images
//type=2 for videos
  console.log("Type is "+temp)
  if(temp=="jpg" || temp=="jfif")
  this.shouts.type=1
  if(temp=="mp4")
  this.shouts.type=2
  if(temp=="mp3")
  this.shouts.type=3
  console.log("Type is "+this.shouts.type)
  this.service.addShout(this.shouts).subscribe(data=>{
    console.log(data.toString())
  })

   
    this.router.navigate(['/home'])
    
  }

}
