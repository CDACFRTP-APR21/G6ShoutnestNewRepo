import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoutsComponent } from './shouts/shouts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FriendsComponent } from './friends/friends.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
   
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ShoutsComponent,
    FriendsComponent,
    SuggestionsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ProfileComponent,ShoutsComponent,FriendsComponent,SuggestionsComponent] 
})
export class UsersModule { }
