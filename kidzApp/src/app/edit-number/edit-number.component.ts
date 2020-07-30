import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../puzzle.service';
import { NumberModel } from '../numbers/number.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms"; 
import { FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-edit-number',
  templateUrl: './edit-number.component.html',
  styleUrls: ['./edit-number.component.css']
})
export class EditNumberComponent implements OnInit {

  constructor(private puzzleService: PuzzleService, private router: Router, private _route:ActivatedRoute,  private fb:FormBuilder) { }
  numberItem = new NumberModel(null,null,null,null);

  ngOnInit(): void {
    let id=this._route.snapshot.paramMap.get("id")
    const ProID={id:id};
    this.puzzleService.Updatedget(ProID)
    .subscribe((data)=>{this.numberItem=JSON.parse(JSON.stringify(data)); })
  }

  UpdateNumber(){
    let id=this._route.snapshot.paramMap.get("id")
    const ProID={id:id};
    this.puzzleService.EditNumber(ProID,this.numberItem)
    
    alert('Updated successfully ');
    this.router.navigate(['/admin'])
  }
}
