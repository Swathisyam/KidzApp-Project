import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor(private http: HttpClient) { }
  getNumbers(){
    return this.http.get("http://localhost:3000/puzzle/numbers");
    // return this.http.get("http://localhost:3000/admin/numbers"))
  }
  newNumber(item)
  {
    return this.http.post("http://localhost:3000/insert",{"puzzle":item})
    .subscribe(data =>{console.log(data)})
  }
  delNumber(_id:string){
    return this.http.post("http://localhost:3000/delete",{"id":_id} )
  }
  EditNumber(ProID,editedItem){

    return this.http.post("http://localhost:3000/edit",{"number":editedItem,"ID":ProID})
    .subscribe((data)=>{console.log(data)})
    
  }
  Updatedget(ID){
    
    console.log(ID)
    return this.http.post("http://localhost:3000/editedList",{"ID":ID})
    
  }
}
