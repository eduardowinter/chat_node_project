import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Alert } from './../classes/alert';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { AlertType } from './../enums/alert-type.enum';
import { of } from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<User | null>;

  constructor(
    private router: Router,
    private alertServices: AlertService
  ) { 
    // TODO fetch the user from Firebase backend, then set the user
    this.currentUser = of(null);
   }

  public signup(firtName: string, lastName: string, email: string, password: string): Observable<boolean> {
    // TODO call Firebase signup function
    return of(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    // TODO call Firebase login function
    return of(true);
  }

  public logout(): void {
    // TODO call Firebase logout function
    this.router.navigate(['/login']);
    this.alertServices.alerts.next(new Alert('You have been signed out.'))

  }
}
