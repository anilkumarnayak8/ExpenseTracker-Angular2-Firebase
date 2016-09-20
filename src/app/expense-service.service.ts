import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {
  
	private expenses:Expense[] = [];

    constructor() { }

    getExpenses():Expense[]{
    	console.log('expenses returning');
    	return this.expenses;
    }

    create(expense:Expense){
  		this.expenses.push(expense);
  		console.log(this.expenses.length);
  	}

  	delete(index:number){
  		this.expenses.splice(index,1);
  	}
}
