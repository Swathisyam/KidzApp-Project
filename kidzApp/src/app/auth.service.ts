import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators/map';
// import { userData } from './'


export interface UserDetails {
  _id: string,
  name: string,
  email: string,
  password:string
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  name: string,
  password: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private _regUrl = "http://localhost:3000/register";
  private _loginUrl="http://localhost:3000/login";
  // private _loginadUrl="http://localhost:3000/admin";

  private token: string;


  constructor(private http: HttpClient, private router: Router) { }

    


  registerUser(user){
    return this.http.post(this._regUrl,user)
  }

  loginUser(user){
    return this.http.post(this._loginUrl,user)
  }
  // adminUser(user){
  //   return this.http.post(this._loginUrl,user)
  // }
  
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
     saveToken(token): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

     getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
      console.log("token")
    }
    return this.token;
  }

     getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      console.log(payload);
      payload = window.atob(payload);
      console.log(payload)
      return JSON.parse(payload);
    } 
    else {
      return null;
    }
  }

   isLoggedIn() : boolean{
    const user = this.getUserDetails();
    // console.log(user);
    if (user) {
      // this.loggedIn
      // return (localStorage.getItem('token') !==null)
      return !!localStorage.getItem('token')
    } else {
      return false;
    }
  }
  

   logout(): void {
    
    localStorage.removeItem('token');
    // this.router.navigateByUrl('');
    
  }
}



