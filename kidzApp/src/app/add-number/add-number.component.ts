import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../puzzle.service';
import { NumberModel } from '../numbers/number.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms"; 
import { FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-add-number',
  templateUrl: './add-number.component.html',
  styleUrls: ['./add-number.component.css']
})
export class AddNumberComponent implements OnInit {

  constructor(private puzzleService: PuzzleService, private router: Router, private _route:ActivatedRoute,  private fb:FormBuilder) { }
  numberItem = new NumberModel(null,null,null,null);
  
  ngOnInit(): void {}

  AddNumber(){
    this.puzzleService.newNumber(this.numberItem);
    console.log("called");
    alert("Added Succesfully");
    this.puzzleService.getNumbers().subscribe()
    this.router.navigate(['/admin']);
  // })
}
}