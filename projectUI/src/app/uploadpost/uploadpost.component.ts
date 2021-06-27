import { Component, OnInit } from '@angular/core';


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
  constructor(private service:SharedService) { }
 

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
  //   var val = {EmployeeId:this.EmployeeId,
  //     EmployeeName:this.EmployeeName,
  //     Department:this.Department,
  //   DateOfJoining:this.DateOfJoining,
  // PhotoFileName:this.PhotoFileName};
  let rev1
 
  console.log("In post")
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
  console.log("Type is "+this.shouts.type)
  this.service.addShout(this.shouts).subscribe(data=>{
    console.log(data.toString())
  })

    console.log(sessionStorage.getItem('userName'))
    console.log(this.shouts.caption)
    console.log(this.shouts.path)
    console.log(this.shouts.uploadDate)
  }

}
