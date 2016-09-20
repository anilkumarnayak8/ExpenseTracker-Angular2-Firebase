import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense-service.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-home-page-tabs',
  templateUrl: './home-page-tabs.component.html',
  styleUrls: ['./home-page-tabs.component.css']
})
export class HomePageTabsComponent implements OnInit {

  	expenses:Expense[];
  	es:ExpenseService;
  	constructor(ES:ExpenseService) {
  		this.es = ES;
  	}

  	ngOnInit() {
  		console.log("tab initialized");
  		this.expenses = this.es.getExpenses();
  		console.log(this.expenses);
  	}

}
