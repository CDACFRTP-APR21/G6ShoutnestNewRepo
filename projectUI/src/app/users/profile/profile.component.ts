// import { Component, OnInit } from '@angular/core';
// import { SharedService } from 'src/app/shared.service';
// import { user } from 'src/app/User';


// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user1:user

//   constructor(private service:SharedService) { }
//   id=sessionStorage.getItem('Id');
//   user:any;
//   UserList:any=[];

//   ngOnInit(): void {
//     this.refreshUserList();
//     this.refreshUser(this.id);
//   }

//   refreshUserList()
//   {
//     this.service.getUserList().subscribe(data=>{
//       this.UserList=data
//     })
//   }
//   refreshUser(id:any){
//     this.service.getUserbyId(id).subscribe(data=>{
//       this.user=data
//       console.log("from profile cmp ",this.user,this.user[0].userName)
//     })
//   }


//   uploadProfilePic(event:any){
//         var file=event.target.files[0];
//         const formData:FormData=new FormData();
//         formData.append('uploadedFile',file,file.name);
    
//         this.service.uploadPhoto(formData).subscribe((data:any)=>{
//           let phototoname=data.toString();
//           this.user1.profilePic=this.service.PhotoUrl+phototoname
//           let uId=sessionStorage.getItem("Id")
//           let uname=sessionStorage.getItem("userName")
//           let password=sessionStorage.getItem("password")
//           let emailId=sessionStorage.getItem("emailId")
//         this.service.setProfilePic({profilePic:this.user1.profilePic,userId:uId,userName:uname,password:password,emailId:emailId}).subscribe((data:any)=>{
//           console.log(data)
//         })


// }
//   }
//   }



import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { user } from 'src/app/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private service:SharedService) { }
  user1:user;
  UserList:any=[];
    id=sessionStorage.getItem('Id');
  user:any;

  ngOnInit(): void {
    this.user1={
      
      userName:'',
      emailId:'',
      password:'',
      firstName :'',
      lastName :'',
      DateOfBirth :new Date,
      MobileNo :'',
      profilePic:'',
      admin_verify:false
  
    }
    
   
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
          console.log("from profile cmp ",this.user)
        })
      }

/*
this.service.login({userName:this.user1.userName,password:this.user1.password})
    .subscribe((data:any)=>{
      
      sessionStorage.setItem('Id',data.userId)
      sessionStorage.setItem('userName',data.userName)
      console.log("From session"+sessionStorage.getItem('Id'))
      
     this.router.navigate(['/home'])
   
      
    })
*/
  uploadProfilePic(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      let phototoname=data.toString();
      this.user1.profilePic=this.service.PhotoUrl+phototoname
      let uId=sessionStorage.getItem("Id")
      let uname=sessionStorage.getItem("userName")
      let password=sessionStorage.getItem("password")
      let emailId=sessionStorage.getItem("emailId")
    this.service.setProfilePic({profilePic:this.user1.profilePic,userId:uId,userName:uname,password:password,emailId:emailId}).subscribe((data:any)=>{
      console.log(data)
    })
      // this.flag=true
    })
  }

}
