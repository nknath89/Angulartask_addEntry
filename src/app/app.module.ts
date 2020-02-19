import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AmountPipe } from './_pipe/amount.pipe';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddressPipe } from './_pipe/address.pipe';
import { SearchPipe } from './_pipe/search.pipe';
import{ HttpErrorInterceptor } from './_helpers/http-error.interceptor';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from './_guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './MaterialModule';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AmountPipe,
    AddressPipe,
    SearchPipe,
    DetailComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
