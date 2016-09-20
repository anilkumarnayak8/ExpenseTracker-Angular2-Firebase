/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpenseServiceService } from './expense-service.service';

describe('Service: ExpenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseServiceService]
    });
  });

  it('should ...', inject([ExpenseServiceService], (service: ExpenseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
