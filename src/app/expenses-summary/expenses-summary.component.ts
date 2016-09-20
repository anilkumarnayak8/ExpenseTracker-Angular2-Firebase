import { Component, OnInit,Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-expenses-summary',
  templateUrl: './expenses-summary.component.html',
  styleUrls: ['./expenses-summary.component.css']
})
export class ExpensesSummaryComponent implements OnInit {

    constructor() { }
    summary:any = {
      	food:0,
      	travel:0,
      	other:0
    };
    @Input()
    expenses:Expense[];

    ngOnInit() {
    	var self = this;
    	this.expenses.forEach(function(expense:Expense){
    		switch(expense.category)
    		{
    			case 'Food':{
    				self.summary.food +=expense.amount;
    				break;
    			}
    			case 'Travel':{
    				self.summary.travel +=expense.amount;
    				break;
    			}
    			case 'Other':{
    				self.summary.other +=expense.amount;
    				break;
    			}
    		}
    	})
    }

}
