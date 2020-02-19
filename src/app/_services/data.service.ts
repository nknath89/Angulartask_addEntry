import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

 url = "http://localhost:3000/user/"

  getdata(): Observable<any>{
    return this.http.get(this.url);
  }

  getsinguser(sid){
    return this.http.get(this.url + sid);
  }

  updateUser(user){
    let URL = this.url + user.id;
    this.http.put(URL,user).subscribe((res)=>{
      this.getdata();
    });
  }

  DeleteUser(uid){
    let URL = this.url + uid;
    this.http.delete(URL).subscribe(data=>{
      this.getdata();
    })
  }
}
