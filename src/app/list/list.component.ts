import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    _users:object;
    showerror;
    searchtext;

    constructor( private _data:DataService, private router:Router) { }

  ngOnInit() {


    this._data.getdata().subscribe(
      resp => {
        this._users = resp
      },
      error =>{
        this.showerror = error
      }
    )

  }

  getrow(users){
   this.router.navigate(["/comp2",users.id])
  }

  Onlogout(){
    localStorage.removeItem("Cuser");
    this.router.navigate([""])
  }

 



}
