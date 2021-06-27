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
  readonly MEDIAUrl=""

  constructor(private http:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
  }

  public login(user:any)
  {
    console.log("in service")
    return this.http.post(this.APIUrl+'/login/',JSON.stringify(user),this.httpOptions)
   
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

  addShuot(val:any){
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
  getUserbyId(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/getuserbyid/'+val)
  }

  getSuggestionsbyId(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/getsuggestions/'+val)
  }

  addfriend(val:any){
    return this.http.post(this.APIUrl+ '/friends/',val)
  }
  // getting FrienList
  getFriendList(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/friendList/'+val)
 }
 getPendingRequests(val:any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/pendingrequests/'+val)
}
 changeFriendStatus(val:any){
   return this.http.put(this.APIUrl+'/friends/',val)
 }

}
