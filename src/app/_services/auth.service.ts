import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn;
  constructor() {
    this.isUserLoggedIn = false;
   }

   setUserLoggedIn(){
     //this.isUserLoggedIn = true;
     localStorage.setItem('Cuser', 'true');
   }

   getuserLoggedIn(){
    return this.isUserLoggedIn;
   } 
}
