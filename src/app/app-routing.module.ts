import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch: 'full'},
  {path:'comp1', component:ListComponent, canActivate: [AuthGuard]},
  {path:'comp2/:id', component:DetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
