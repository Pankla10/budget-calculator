import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { empty } from 'rxjs';
import {budgetItem} from '../models/budget-item.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  //@Input() dataArray?: Array<budgetItem>;
  @Input() description?: string = 'dd';
  @Input() amount?: number = 0;
  budget: number = 0;
  dataArray2?: Array<budgetItem> = [];
  temporaryBudget: number = 0;

  ngOnInit(): void {
    //console.log(this.dataArray);
    //console.log(this.dataArray != undefined)
  }
  ngOnChanges(): void{
    //console.log("change")
    //console.log(this.dataArray == undefined);
    this.updateArray();
     // console.log(this?.description)
    console.log(this.dataArray2);
    
    //console.log(this.dataArray?[0].description1);
  }

  updateArray(): void{
    if(this.description != undefined && this.amount != 0){
      this.dataArray2?.push({
        description1: this.description,
        amount1: this.amount
      })
      this.updateBudget();
      //console.log(this.dataArray2)
    }
  }
  
  updateBudget(): void{
    /*if(this.amount != undefined){
      this.budget += this.amount;
    }*/
    
    this.dataArray2?.forEach(data => {
      if(data.amount1 != undefined){
        this.temporaryBudget += Number(data.amount1);
        
      }
      
    })
    this.budget = this.temporaryBudget;
    this.temporaryBudget = 0;
    console.log(this.budget)
  }

  delete(event: Event): void{
    if(event.target != undefined){
      const id = (event.target as HTMLInputElement).id;
      this.dataArray2?.splice(parseInt(id),1);
      this.updateBudget();
      //const id = event.target.value;
      console.log(id);
    }
   
  }

  openDialog(id: number): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(PopUpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(form =>{
      if(form != undefined){
        this.dataArray2![id].description1 = form.get('description').value,
        this.dataArray2![id].amount1 = form.get('amount').value
        this.updateBudget();
      }
      }
    )
  }


}
