import { Component, OnInit,Input } from '@angular/core';
import { ExpenseService } from '../expense-service.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  
    es:ExpenseService;

    @Input()
    expenses:Expense[] = [];
    
    constructor(){}
    
    ngOnInit() {
    	
    }

}
