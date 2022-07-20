import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {budgetItem} from '../models/budget-item.model';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { NonNullAssert } from '@angular/compiler';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<any>();

  addForm = new FormGroup({
    description: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    amount: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9-]*$")]),
    submit: new FormControl('Add')
  })

  description?: any = this.addForm;
  amount?: any;

  dataArray?: Array<budgetItem> = [];

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.addForm.value.amount?.length)
      console.log(this.addForm.value.description?.length)
      console.log(Number.isNaN(Number(this.amount))) 
      if(this.addForm.valid){
        this.newItemEvent.emit({description:this.addForm.value.description, amount:this.addForm.value.amount});
      }

  }


}
