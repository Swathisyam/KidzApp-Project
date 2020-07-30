import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlog',
  templateUrl: './adlog.component.html',
  styleUrls: ['./adlog.component.css']
})
export class AdlogComponent implements OnInit {

  Admin ={
    "username":"",
    "password":""
  };
  constructor(private router : Router) { }
  loginAdmin(){
    this.router.navigate(['/admin'])
  }
  ngOnInit(): void {
  }

}
