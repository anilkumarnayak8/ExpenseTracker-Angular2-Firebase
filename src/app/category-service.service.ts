import { Injectable } from '@angular/core';
export interface Category{
	name:string;
}

@Injectable()
export class CategoryService {
  
  	categories:Category[] = [
  		{
  			name:'Food'
  		},
  		{
  			name:'Travel'
  		},
  		{
  			name:'Other'
  		}
  	]

  	constructor() { }

  	getCategories():Category[]{
  		return this.categories;
  	}

}
