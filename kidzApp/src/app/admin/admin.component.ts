import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../puzzle.service';
import { NumberModel } from '../numbers/number.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  numbers:NumberModel[];
  imageWidth: number = 50;
  imageMargin: number = 2;
  // showImage: boolean = false;
  constructor(private puzzleService: PuzzleService, private router: Router) { }
  numberItem = new NumberModel(null,null,null,null)
  count = 0;

  // EditNumber(_id){
  //     if(confirm("Dou you want to continue??") == true){
  //       console.log("called function edit");
  //       console.log(_id);
  //       this.puzzleService.Updatedget(_id).subscribe();
  //       this.puzzleService.newNumber(_id)
  //       this.router.navigate(['/edit']);
  //     }
  //   }

  RemoveNumber(_id){
    if(confirm("Are you sure want to delete??") == true){
      console.log("called");
      console.log(_id);
      alert("Removed Succesfully");
      this.puzzleService.delNumber(_id).subscribe();
      this.puzzleService.getNumbers().subscribe((data)=>{
      this.numbers = JSON.parse(JSON.stringify(data));
      this.router.navigate(['/admin']);
      })
    }
  }

  ngOnInit(): void {
    this.puzzleService.getNumbers()
    .subscribe((data)=>{
      this.numbers = JSON.parse(JSON.stringify(data));
      // this.router.navigate(['/admin']);
    })
  }
}