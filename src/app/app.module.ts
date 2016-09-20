import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressCircle } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { AppComponent } from './app.component';
import { HomePageTabsComponent } from './home-page-tabs/home-page-tabs.component';
import { AddExpenseFormComponent } from './add-expense-form/add-expense-form.component';
import { CategoryService } from './category-service.service';
import { ExpenseService } from './expense-service.service';
import { DenominationService } from './denomination.service';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpensesSummaryComponent } from './expenses-summary/expenses-summary.component';
import { RupeesPipe } from './rupees.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageTabsComponent,
    AddExpenseFormComponent,
    ExpensesListComponent,
    ExpensesSummaryComponent,
    RupeesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdInputModule,
    MdListModule
  ],
  providers:[
    DenominationService,
    ExpenseService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





