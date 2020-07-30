import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.logout;
  }

}
