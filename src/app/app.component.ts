import { Component} from '@angular/core';
import {budgetItem} from './models/budget-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-calculator';
  //dataArray?: Array<budgetItem>;
  description?: string;
  amount?: number;

  addItem(newItem: any){
    //this.dataArray?.push(newItem);
    console.log(newItem);
    this.description = newItem.description;
    this.amount = newItem.amount;
    console.log(this.amount);
  }
}
