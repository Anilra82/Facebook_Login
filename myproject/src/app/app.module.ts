import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import {routes} from "./app.routes";
import {AuthGuardService} from "./auth-guard.service";


export const firebaseConfig = {
  apiKey: "AIzaSyCa6y-ULAmJdvPcFfNMNYq-fsKRRWzIl4Q",
  authDomain: "facebook-d5169.firebaseapp.com",
  databaseURL: "https://facebook-d5169.firebaseio.com",
  storageBucket: "facebook-d5169.appspot.com",
  messagingSenderId: "905786111435"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
