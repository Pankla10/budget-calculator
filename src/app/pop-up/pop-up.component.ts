import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {budgetItem} from '../models/budget-item.model';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<PopUpComponent>,) { }
  form = new FormGroup({
    description: new FormControl('',[Validators.required,Validators.maxLength(40)]),
    amount: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9-]*$")])
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close(this.form);
  }

  close(){
    this.dialogRef.close();
  }
}
