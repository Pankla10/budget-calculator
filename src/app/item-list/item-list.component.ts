import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { empty } from 'rxjs';
import {budgetItem} from '../models/budget-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {

  constructor() { }
  //@Input() dataArray?: Array<budgetItem>;
  @Input() description?: string = 'dd';
  @Input() amount?: number = 0;
  budget: number = 0;
  dataArray2?: Array<budgetItem> = [];

  ngOnInit(): void {
    //console.log(this.dataArray);
    //console.log(this.dataArray != undefined)
  }
  ngOnChanges(): void{
    //console.log("change")
    //console.log(this.dataArray == undefined);
    if(this.description != undefined && this.amount != 0){
      this.dataArray2?.push({
        description1: this.description,
        amount1: this.amount
      })
      this.updateBudget();
      //console.log(this.dataArray2)
    }
     // console.log(this?.description)
    console.log(this.dataArray2);
    
    
    //console.log(this.dataArray?[0].description1);
  }
  
  updateBudget(): void{
    if(this.amount != undefined){
      this.budget += this.amount;
    }
    console.log(this.budget)
  }

}
