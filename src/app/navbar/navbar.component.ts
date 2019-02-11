import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  login: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
  }

  logIn() {
    this.authService.login(this.login, this.password);
    this.isLogged = this.authService.isLoggedIn;
  }

  logOut() {
    this.authService.logout();
    this.isLogged = this.authService.isLoggedIn;
  }
}
