import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { PhoneDetails } from '../../../model/PhoneDetails';
import { PhoneFilter } from '../../../model/PhoneFilter';
import { CustomerService } from '../../../service/customer/customer-service.service';
import { catchError } from 'rxjs/operators'; 
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-customer-phone-details',
  templateUrl: './customer-phone-details.component.html',
  styleUrls: ['./customer-phone-details.component.css']
})
export class CustomerPhoneDetailsComponent implements OnInit {

  public phoneFilter: PhoneFilter = {} as PhoneFilter;
  public phoneValidationState$: Observable<string[]> = {} as Observable<string[]>;   

  phoneDetails$: Observable<PhoneDetails[]> = {} as Observable<PhoneDetails[]>;   

  openMessageDialog: boolean = false;
  MessageDialog: string = "";

  constructor(
    private _customerService: CustomerService,
    private primengConfig: PrimeNGConfig
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    debugger;
    this.filterCustomerBy(this.phoneFilter);
    this.getAllPhoneValidationState();
  }

  public filterCustomerBy(phoneFilter: PhoneFilter) {
    debugger;
    this.phoneDetails$ = this._customerService.filterCustomerBy( phoneFilter).pipe(
      catchError(error => {
        this.handleError(error);
        return of([])
      })
    )
  }
  public getAllPhoneValidationState() {
    debugger;
    this.phoneValidationState$ = this._customerService.getAllPhoneValidationState().pipe(
      catchError(error => {
        this.handleError(error);
        return of([])
      }),
      
    )
  }
  private handleError(error: HttpErrorResponse) {
    debugger;
    this.openMessageDialog = true;
    this.MessageDialog = error.error;
    console.log('error loading the list of users', error);
  
  };

  closeDialog() {
    this.MessageDialog = "";
    this.openMessageDialog = false;
  }

}
