import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Role } from '../models/role';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn:boolean=true;

  constructor(private router: Router, private authService: AuthService,) { }

  
  Logout() {
    this.isLoggedIn = !this.isLoggedIn;
    this.authService.logout();
    this.router.navigate(['login']);
  }
  
  
  ngOnInit(): void {
    // this.isLoggedIn = !this.isLoggedIn;
    // this.authService.logout();
    // this.router.navigate(['login']);
  }


   
  
}
