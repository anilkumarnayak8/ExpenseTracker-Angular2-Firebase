import { Component, OnInit } from '@angular/core';
import { DenominationService } from '../denomination.service';
import { ExpenseService } from '../expense-service.service';
import { Expense } from '../expense';
import { CategoryService } from '../category-service.service';
import { Category } from '../category-service.service';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css']
})
export class AddExpenseFormComponent implements OnInit {
  
  amount:number;

  denominations:number[] = [];

  categories:Category[];

  ds:DenominationService;

  es:ExpenseService;

  cs:CategoryService;

  expense:Expense = {
  	amount:0,
  	date:new Date(),
  	category:'Food'
  };

  constructor(DS:DenominationService,ES:ExpenseService,CS:CategoryService) { 
  	this.ds = DS;
  	this.es = ES;
    this.cs = CS;
  }
  createExpense(){
  	this.es.create(this.expense);
  }
  updateAmount(amount:number):void{
    console.log(amount);
  	this.expense.amount += amount;
  }
  ngOnInit() {
  	this.denominations = this.ds.getDenominations();
    this.categories = this.cs.getCategories();
  }

}
