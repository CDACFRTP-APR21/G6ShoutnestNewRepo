import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfileComponent } from './users/profile/profile.component';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { UploadpostComponent } from './uploadpost/uploadpost.component';
import { ShoutsComponent } from './users/shouts/shouts.component';
import { FriendsComponent } from './users/friends/friends.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'uploadpost',component:UploadpostComponent},
  {path:'shouts',component:ShoutsComponent},
  {path:'friends',component:FriendsComponent},
  {path:'editprofile',component:EditProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
