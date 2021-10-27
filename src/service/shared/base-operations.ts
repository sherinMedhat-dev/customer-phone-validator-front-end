import { Observable } from "rxjs";

export interface BaseOperations<T, ID> {
  findBy(url?: string, model?: ID): Observable<T[]>;
  findAll(url?: string): Observable<T[]>;
}
