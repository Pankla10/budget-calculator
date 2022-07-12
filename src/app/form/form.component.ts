import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {budgetItem} from '../models/budget-item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<any>();

  description?: string;
  amount?: number;
  //dataArray?: Array<budgetItem> = [{
  //  description1:"dd",
  //  amount1: 1
  //}];
  dataArray?: Array<budgetItem> = [];

  ngOnInit(): void {
  }

  onSubmit(): void{
    //console.log(this.description);
    //console.log(this.amount);
    if(this.description!.length <= 50 && this.amount!.toString().length <= 10){
      //this.dataArray?.push({
      //  description1: this.description,
      //  amount1: this.amount
      //})
      console.log(this.amount!.toString().length)
      this.newItemEvent.emit({description:this.description, amount:this.amount});
    }
    
    //console.log(this.dataArray);
    //this.newItemEvent.emit(this.description);
   
    //this.newItemEvent.emit(this.amount);
  }

}
