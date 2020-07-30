import { Component, OnInit } from '@angular/core';
import { NumberModel } from './number.model';
import { PuzzleService } from '../puzzle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers:NumberModel[];
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  // showImage:number = 1

  constructor(private puzzleService: PuzzleService, private router: Router) { }
  numberItem = new NumberModel(null,null,null,null)
  // count = 0;

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.puzzleService.getNumbers()
    .subscribe((data)=>{
      this.numbers = JSON.parse(JSON.stringify(data));
    })
  }
  

}
