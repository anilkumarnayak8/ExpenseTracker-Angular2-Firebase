import { Injectable } from '@angular/core';

@Injectable()
export class DenominationService {
  denominations:number[] = [10,20,30,40,50,60];

  constructor() { }
  
  getDenominations():number[]{
  	return this.denominations;
  }

}
