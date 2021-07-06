import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from '../users/users.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../users/profile/profile.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UsersModule,
    
  ]
})
export class HomeModule { }
