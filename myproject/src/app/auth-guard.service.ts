import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Router, CanActivate} from "@angular/router";
import {AngularFireAuth} from "angularfire2";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
        (!authenticated) this.router.navigate([ '/login' ]);
      })
  }

}
