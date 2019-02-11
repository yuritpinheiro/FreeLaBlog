import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Create Auth0 web auth instance
  expiresAt: number;
  authenticated: boolean;

  constructor(private router: Router) {
  }

  login(login: string, password: string) {
    if (login === environment.auth.login && password === environment.auth.password) {
      this.authenticated = true;
    }
  }

  logout() {
    this.authenticated = false;
    this.router.navigate(['/home']);
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return this.authenticated;
  }

}
