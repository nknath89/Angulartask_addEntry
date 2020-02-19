import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor( private _auth:AuthService , private _router:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    let username = this.loginForm.value.username;
    let pass = this.loginForm.value.password;
    
    if(username == "admin" && pass == "admin"){
      this._auth.setUserLoggedIn();
      this._router.navigate(["comp1"]);
      // console.log("You are pass");
    }else if(username !== "admin") {
      // alert("User Name is Not right!");
      this.loginForm.invalid;
    } else if(pass !== "admin") {
      alert("Password is Not right!");
    } else {
      alert("Please check your right Username and Password!");
    } 
    
  }

}
