import { DataService } from './../_services/data.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators } from "@angular/forms";
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  frmRecUser;
  singleuser;
  userdata;
  save= false;
  constructor( private route:ActivatedRoute, private _users:DataService, private _R : Router,private dialog: MatDialog) {
    this.route.params.subscribe(param=> this.singleuser = param.id);
   }

  ngOnInit() {
    this.loadForm();

    this._users.getsinguser(this.singleuser).subscribe((resp:any) => {
      this.singleuser =resp;
      this.frmRecUser = new FormGroup({
        id: new FormControl (resp.id),
        first_name: new FormControl (resp.first_name,[Validators.required]),
        last_name: new FormControl (resp.last_name, [Validators.required]),
        address: new FormGroup ({
          state_address: new FormControl(resp.address.state_address, [Validators.required]),
          apart_number: new FormControl(resp.address.apart_number, [Validators.required]),
          city: new FormControl(resp.address.city, [Validators.required]),
          state: new FormControl(resp.address.state, [Validators.required]),
          zip: new FormControl(resp.address.zip, [Validators.required])
        }),
        profile_img: new FormControl (resp.profile_img),
        total: new FormGroup({
          amount: new FormControl(resp.total.amount, [Validators.required]),
          currency: new FormControl(resp.total.currency)
        })
      });
    });

  }

  loadForm(){
    this.frmRecUser = new FormGroup({
      id: new FormControl ({value: "", disabled: true}),
      first_name: new FormControl (""),
      last_name: new FormControl (" "),
      address: new FormGroup ({
        state_address: new FormControl(""),
        apart_number: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        zip: new FormControl("")
      }),
      profile_img: new FormControl(""),
      total: new FormGroup({
        amount: new FormControl(""),
        currency: new FormControl("")
      })
    });
    
  }

  onSubmit(user){
    
    if(this.frmRecUser.status === "VALID"){
      this._users.updateUser(user);
      console.log(user);

      this.save = true;

      setTimeout(()=>{
        this._R.navigate(["/comp1"])
      },3000);

      
    }
    
    console.log(this.frmRecUser)
  }

  cancel(){
    this._R.navigate(["/comp1"]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    //const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      this._users.DeleteUser(this.singleuser.id);
      this._R.navigate(["/comp1"]);
      }
    });
  }

}
