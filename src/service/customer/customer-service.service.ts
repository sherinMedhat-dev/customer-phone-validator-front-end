import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PhoneDetails } from '../../model/PhoneDetails';
import { PhoneFilter } from '../../model/PhoneFilter';
import { BaseOperationsService } from '../shared/base-operations-service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseOperationsService<PhoneDetails, PhoneFilter> {
  private filterUrlPath: string = `${environment.api.customer.filter}` 
  private phonephoneValidationStateUrlPath: string = `${environment.api.customer.phoneValidationState}`

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.endPointBaseUrl}/customers`)
  }
  filterCustomerBy(phoneFilter: PhoneFilter) {
    return this.findBy(this.filterUrlPath, phoneFilter);
  }
  getAllPhoneValidationState() {
    return this._http.get<string[]>(this._baseurl + this.phonephoneValidationStateUrlPath, this.getHeaders());

  }
}
