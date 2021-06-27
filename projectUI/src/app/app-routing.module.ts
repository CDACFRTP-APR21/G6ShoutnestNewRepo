import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfileComponent } from './users/profile/profile.component';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'friends',component:FriendsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
