import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



logUser=
{
  "email":"",
  "password": ""
};

// adminUs={
//   "email":"",
//   "password": ""
// }

constructor(public authService : AuthService ,private router : Router) { }


  loginUser(){
    this.authService.loginUser(this.logUser)
    // this.isloginUser = !this.isloginUser;
    .subscribe(
      res=> {
        console.log(res),
        localStorage.setItem('token',res['token'] );       //token in local storage
        this.router.navigate(['/puzzle']);
      },
      err => console.log(err)
    )
    }


    // adminUser(){

    // this.authService.adminUser(this.logUser)
    // .subscribe(
    //   res=> {
    //     console.log(res),
    //     localStorage.setItem('token',res['token']);       //token in local storage
    //     this.router.navigate(['/admin']);
    //   },
    //   err => console.log(err)
    // )
  
    // .subscribe(
    //   res => this.router.navigate(['/admin']),
    //   // res => console.log(res),
    //   err => console.log(err)
      
    // )
    
  // }

  ngOnInit(): void { 
    
   }
  
}
