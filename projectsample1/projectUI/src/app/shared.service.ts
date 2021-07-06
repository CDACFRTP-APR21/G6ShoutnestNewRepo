import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {user} from 'src/app/User'
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 

  private httpOptions:any;
  public token:string
  ;
  public username:string;
  public errors:any[];
  
  public user:user

  readonly APIUrl= " http://127.0.0.1:8000"
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
  }


  getUserbyId(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/getuserbyid/'+val)
  }
  public login(user:any)
  {
    
    return this.http.post(this.APIUrl+'/login/',JSON.stringify(user),this.httpOptions)
   
  }

  public setProfilePic(val:any)
  {
    return this.http.put(this.APIUrl+'/setProfilePic/',val)
  }

  getSuggestionsbyId(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/getsuggestions/'+val)
  }

  getFriendList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/friendList/'+val)
  }

 getPendingRequests(val:any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/pendingrequests/'+val)
}
 changeFriendStatus(val:any){
   return this.http.put(this.APIUrl+'/friends/',val)
 }

 reports(val:any){
  return this.http.post(this.APIUrl+'/reports/',val)
}

  
  addfriend(val:any){
    return this.http.post(this.APIUrl+ '/friends/',val)
  }
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/user/')
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+ '/register/',val)
  }

  editUser(val:any){
    return this.http.put(this.APIUrl+ '/User/',val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+ '/User/'+val)
  }

  getShoutList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/shouts/')
  }

  addShout(val:any){
    return this.http.post(this.APIUrl+ '/shouts/',val)
  }

  editShout(val:any){
    return this.http.put(this.APIUrl+ '/shouts/',val)
  }

  deleteShout(val:any){
    return this.http.delete(this.APIUrl+ '/shouts/'+val)
  }

  getfriendshout(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/friendshouts/'+val)
  }
  /*this is userlist with user details*/
  getDetailsOfFriend(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/detailsoffriends/'+val)
  }


  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile/',val);
  }



  editProfile(val:any){
    return this.http.put(this.APIUrl+'/user/',val)
  }
  
}
