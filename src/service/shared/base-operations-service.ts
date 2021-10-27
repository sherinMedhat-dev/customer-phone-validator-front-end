import { Observable } from "rxjs";
import { BaseOperations } from "./base-operations";
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BaseOperationsService<T,ID> implements BaseOperations<T,ID>{

constructor(
    protected _http: HttpClient,
    protected _baseurl: string
  ) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   findBy(url?: string, filterModel?: ID): Observable<T[]> {
    return this._http.post<T[]>(this._baseurl + url, JSON.stringify(filterModel), this.getHeaders());
   }
  findAll(url?: string): Observable<T[]> {
    return this._http.get<T[]>(this._baseurl + url, this.getHeaders());

  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }
}
